"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";

import { AppSettingProvider } from "@/context/AppContext";
import { CartProvider } from "@/context/CartContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { QueryProvider } from "@/context/QueryContext";
import { WishlistProvider } from "@/context/WishlistContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AppSettingProvider>
      <CartProvider>
        <WishlistProvider>
          <QueryProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </QueryProvider>
        </WishlistProvider>
      </CartProvider>
    </AppSettingProvider>
  );
};

export default AppProviders;
