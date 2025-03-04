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

interface ProfileContextType {
  profile?: User;
  setProfile: Dispatch<SetStateAction<User | undefined>>;
  fetchProfile: () => Promise<void>;
  error: string | null;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<User | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    localStorage.getItem("_bbr_tk")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setAccessToken(localStorage.getItem("_bbr_tk"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const fetchProfile = useCallback(async () => {
    if (!accessToken) return;
    try {
      const user = await getProfile();
      setProfile(user);
      setError(null);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to load profile, please try again later.");
    }
  }, [accessToken]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <ProfileContext.Provider
      value={{ profile, setProfile, fetchProfile, error }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
