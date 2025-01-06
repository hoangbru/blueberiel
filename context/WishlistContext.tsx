"use client";

import { Product } from "@/types/product";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type WishlistContextType = {
  wishlist: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
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
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const addItem = (item: Product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.find((i) => i.id === item.id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };

  const removeItem = (id: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addItem, removeItem, clearWishlist }}
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
