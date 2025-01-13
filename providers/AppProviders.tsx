import { ReactNode } from "react";

import { CartProvider } from "@/context/CartContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { QueryProvider } from "@/context/QueryContext";
import { WishlistProvider } from "@/context/WishlistContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider>
      <WishlistProvider>
        <QueryProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </QueryProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

export default AppProviders;
