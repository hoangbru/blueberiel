import { ReactNode } from "react";

import { AppSettingProvider } from "@/context/AppContext";
import { CartProvider } from "@/context/CartContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { QueryProvider } from "@/context/QueryContext";
import { WishlistProvider } from "@/context/WishlistContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
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
