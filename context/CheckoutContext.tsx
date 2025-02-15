"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { CartItem } from "./CartContext";

export type CheckoutItem = {
  userId: string | number;
  items: CartItem[];
  shippingAddress: string;
  paymentMethod: string;
  totalAmount: number;
};

type CheckoutContextType = {
  checkout: CheckoutItem[];
  setCheckoutItem: (key: string, value: string) => void;
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [checkout, setCheckout] = useState<CheckoutItem[]>([]);

  const setCheckoutItem = (key: string, value: string) => {
    setCheckout((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <CheckoutContext.Provider value={{ checkout, setCheckoutItem }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
