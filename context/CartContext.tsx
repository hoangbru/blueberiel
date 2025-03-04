"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import toast from "react-hot-toast";

import { Variant } from "@/types/product";

export type CartItem = {
  productId: string | number;
  name: string;
  price: number;
  image: string;
  variant: Variant;
  size: string;
  quantity: number;
  slug: string;
};

type CartContextType = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number, variantId?: string | number) => void;
  updateQuantity: (
    id: string | number,
    quantity: number,
    variantId?: string | number
  ) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("bbr-cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bbr-cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (product: CartItem) => {
    if (product.variant.stock < 1) {
      toast.error(`'${product.name}' is out of stock.`);
      return;
    }

    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (item) =>
          item.productId === product.productId &&
          item.variant.id === product.variant.id
      );

      if (index !== -1) {
        const updatedCart = [...prevCart];
        const currentQuantity = updatedCart[index].quantity;
        const newQuantity = Math.min(
          currentQuantity + product.quantity,
          product.variant.stock
        );

        if (newQuantity > currentQuantity) {
          updatedCart[index].quantity = newQuantity;
          toast.success(`'${product.name}' quantity has been updated.`);
        } else {
          toast.error(`'${product.name}' has reached the maximum stock limit.`);
        }

        return updatedCart;
      } else {
        if (product.quantity > product.variant.stock) {
          toast.error(
            `Only ${product.variant.stock} '${product.name}' are available.`
          );
          return [...prevCart, { ...product, quantity: product.variant.stock }];
        }

        toast.success(`'${product.name}' has been added to the cart.`);
        return [...prevCart, product];
      }
    });
  };

  const removeItem = (id: string | number, variantId?: string | number) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some(
        (item) => item.productId === id && item.variant.id === variantId
      );
      if (!itemExists) return prevCart;

      return prevCart.filter(
        (item) => !(item.productId === id && item.variant.id === variantId)
      );
    });
  };

  const updateQuantity = (
    id: string | number,
    quantity: number,
    variantId?: string | number
  ) => {
    if (quantity < 1) return;

    setCart((prevCart) => {
      const itemExists = prevCart.some(
        (item) => item.productId === id && item.variant.id === variantId
      );
      if (!itemExists) return prevCart;

      return prevCart.map((item) =>
        item.productId === id && item.variant.id === variantId
          ? { ...item, quantity: Math.min(item.variant.stock, quantity) }
          : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
