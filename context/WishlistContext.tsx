"use client";

import { Product } from "@/types/product";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import toast from "react-hot-toast";

type WishlistContextType = {
  wishlist: Product[];
  toggleWishlistItem: (item: Product) => void;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlistItem = (product: Product) => {
    setWishlist((prevWishlist) => {
      const itemExists = prevWishlist.some((item) => item.id === product.id);

      if (itemExists) {
        toast.success(`'${product.name}' has been removed from the wishlist.`);
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        toast.success(`'${product.name}' has been added to the wishlist.`);
        return [...prevWishlist, product];
      }
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlistItem, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
