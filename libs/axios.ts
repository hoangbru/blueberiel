import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status || 500;
    const defaultMessage = "An unexpected error occurred.";

    if (error.response?.status === 401) {
      try {
        // Refresh token API call
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/refresh-token`,
          {},
          { withCredentials: true }
        );

        // Ensure we received a new token
        if (!data?.data?.accessToken) {
          throw new Error("No access token received");
        }

        // Store the new token
        localStorage.setItem("_bbr_tk", data.data.accessToken);

        // Update the default Authorization header
        api.defaults.headers.common.Authorization = `Bearer ${data.data.accessToken}`;

        // Retry the original request with new token
        error.config.headers.Authorization = `Bearer ${data.data.accessToken}`;
        return axios(error.config);
      } catch {
        console.error("Session expired. Redirecting to login...");
        localStorage.removeItem("_bbr_tk");
        // window.location.href = "/login";
      }
    }

    return Promise.reject({
      success: false,
      message: error.response?.data?.meta?.message || defaultMessage,
      status,
    });
  }
);

export default api;
