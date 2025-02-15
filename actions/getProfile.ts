import api from "@/libs/axios";
import { User } from "@/types/auth";

export const getProfile = async (): Promise<User | undefined> => {
  const accessToken = localStorage.getItem("_bbr_tk");
  if (accessToken) {
    const { data } = await api.get(`/api/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data.user;
  }
};
