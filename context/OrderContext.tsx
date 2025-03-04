"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type OrderItem = {
  fullName?: string;
  phone?: string;
  shippingAddress?: string;
  deliveryMethod: string;
  paymentMethod: string;
  orderComment?: string;
};

type OrderContextType = {
  order: OrderItem;
  setOrderItem: (key: string, value: string) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<OrderItem>({
    deliveryMethod: "standard",
    paymentMethod: "cash_on_delivery",
  });

  const setOrderItem = (key: string, value: string) => {
    setOrder((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <OrderContext.Provider value={{ order, setOrderItem }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within a OrderProvider");
  }
  return context;
};
