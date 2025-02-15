"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import useGetLangPrefix from "@/hooks/useLangPrefix";

export type AppSetting = Record<string, string | undefined>;

type AppContextType = {
  settings: AppSetting;
  updateSetting: (key: string, value: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppSettingProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const langPrefix = useGetLangPrefix(pathname);
  const [settings, setSettingsState] = useState<AppSetting>({});

  useEffect(() => {
    if (settings.langPrefix !== langPrefix) {
      setSettingsState((prev) => ({
        ...prev,
        langPrefix,  
      }));
    }
  }, [langPrefix, settings.langPrefix]);

  const updateSetting = (key: string, value: string) => {
    setSettingsState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ settings, updateSetting }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppSetting = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppSetting must be used within an AppSettingProvider");
  }
  return context;
};
