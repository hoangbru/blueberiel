"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";

import { AppSettingProvider } from "@/context/AppContext";
import { CartProvider } from "@/context/CartContext";
import { QueryProvider } from "@/context/QueryContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { OrderProvider } from "@/context/OrderContext";
import { ProfileProvider } from "@/context/ProfileContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AppSettingProvider>
      <ProfileProvider>
        <CartProvider>
          <OrderProvider>
            <WishlistProvider>
              <QueryProvider>{children}</QueryProvider>
            </WishlistProvider>
          </OrderProvider>
        </CartProvider>
      </ProfileProvider>
    </AppSettingProvider>
  );
};

export default AppProviders;
