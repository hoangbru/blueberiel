export interface AuthState {
  message: {
    email: string[];
    password: string[];
  };
}

export interface User {
  id: string | number;
  fullname: string;
  email: string;
  role: string;
}
