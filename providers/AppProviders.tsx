"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";

import { AppSettingProvider } from "@/context/AppContext";
import { CartProvider } from "@/context/CartContext";
import { QueryProvider } from "@/context/QueryContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CheckoutProvider } from "@/context/CheckoutContext";
import { ProfileProvider } from "@/context/ProfileContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AppSettingProvider>
      <ProfileProvider>
        <CartProvider>
          <CheckoutProvider>
            <WishlistProvider>
              <QueryProvider>{children}</QueryProvider>
            </WishlistProvider>
          </CheckoutProvider>
        </CartProvider>
      </ProfileProvider>
    </AppSettingProvider>
  );
};

export default AppProviders;
