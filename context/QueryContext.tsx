"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type QueryParams = {
  page?: string;
  limit?: string;
  search?: string;
  sort?: string;
  minPrice?: string;
  maxPrice?: string;
  category?: string;
  size?: string;
};

type QueryContextType = {
  query: QueryParams;
  setQuery: (key: string, value: string) => void;
};

const QueryContext = createContext<QueryContextType | undefined>(undefined);

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQueryState] = useState<QueryParams>({});

  const setQuery = (key: string, value: string) => {
    setQueryState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQuery = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQuery must be used within a QueryProvider");
  }
  return context;
};
