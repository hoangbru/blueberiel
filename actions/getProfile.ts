import { User } from "@/types/auth";
import { fetcher } from "@/utils/fetcher";

export const getProfile = async (): Promise<User> => {
  const { data } = await fetcher(`/api/profile`);
  return data.user;
};
