export interface AuthState {
  email?: string[] | undefined;
  password?: string[] | undefined;
}

export interface User {
  id: string | number;
  fullname: string;
  email: string;
  role: string;
}
