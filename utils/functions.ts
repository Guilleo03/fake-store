import { Product } from "./types";
import _ from "lodash";

export const sortByPopularity = (products: Product[]): Product[] => {
  return products.sort((a: Product, b: Product) => {
    return a.rating.rate - b.rating.rate;
  });
};

export const sortByPrice = (
  products: Product[],
  type: "asc" | "desc"
): Product[] => {
  if (type == "asc") {
    return products.sort((a: Product, b: Product) => {
      return a.price - b.price;
    });
  } else {
    return products.sort((a: Product, b: Product) => {
      return b.price - a.price;
    });
  }
};

export const capitalizeString = (str: any): any => {
  return str[0].toUpperCase() + str.substring(1);
};

export const getTotal = (
  cart: { product: Product; quantity: number }[]
): number => {
  let total = 0;
  cart.map((p) => (total += _.multiply(p.product.price, p.quantity)));
  return total;
};
