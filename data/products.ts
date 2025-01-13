import { maxValuePrice } from "@/constants/value";

export const colors = [
  "FF5733",
  "33FF57",
  "3357FF",
  "F1C40F",
  "9B59B6",
  "E74C3C",
  "2ECC71",
  "1ABC9C",
  "34495E",
  "7F8C8D",
];

export const prices = [
  "all",
  "0-10",
  "10-20",
  "20-40",
  "40-60",
  "60-80",
  "80-100",
  `${maxValuePrice}`,
];

export const sortOptions = [
  { value: "name", label: "Name, A to Z" },
  { value: "-name", label: "Name, Z to A" },
  { value: "price", label: "Price, low to high" },
  { value: "-price", label: "Price, high to low" },
  { value: "date", label: "Newest" },
];
