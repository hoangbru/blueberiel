import { Category } from "./category";

export interface Product {
  id: string | number;
  name: string;
  description: string;
  images: string[];
  category: Category;
  price: number;
  stock: number;
  rating: Rating;
  variants: Variant[];
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Variant {
  id: string | number;
  size: string;
  color: string;
  stock: number;
}

export interface Rating {
  average: number;
  count: number;
}

export interface OptionSort {
  value: string;
  label: string;
}
