import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

import { getProfile } from "@/actions/getProfile";
import { User } from "@/types/auth";

interface UserContextType {
  profile?: User;
  setProfile: Dispatch<SetStateAction<User | undefined>>;
  fetchProfile: () => Promise<void>;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<User | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
      const user = await getProfile();
      setProfile(user);
      setError(null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to load profile, please try again later.");
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <UserContext.Provider value={{ profile, setProfile, fetchProfile, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
