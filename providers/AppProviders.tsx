"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";

import { AppSettingProvider } from "@/context/AppContext";
import { CartProvider } from "@/context/CartContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { QueryProvider } from "@/context/QueryContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CheckoutProvider } from "@/context/CheckoutContext";
import { UserProvider } from "@/context/UserContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AppSettingProvider>
      <UserProvider>
        <CartProvider>
          <CheckoutProvider>
            <WishlistProvider>
              <QueryProvider>
                <LoadingProvider>{children}</LoadingProvider>
              </QueryProvider>
            </WishlistProvider>
          </CheckoutProvider>
        </CartProvider>
      </UserProvider>
    </AppSettingProvider>
  );
};

export default AppProviders;
