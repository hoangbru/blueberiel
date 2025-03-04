import { CartItem } from "@/context/CartContext";

export interface Order {
  userId: string | number;
  fullName?: string;
  phone?: string;
  items: CartItem[];
  shippingAddress: string;
  deliveryMethod: string;
  paymentMethod: string;
  paymentStatus: string;
  orderComment?: string;
  totalAmount: number;
}
