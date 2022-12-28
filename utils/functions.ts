import { Product } from "./types";

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
      return a.price + b.price;
    });
  }
};

export const capitalizeString = (str: any): any => {
  return str[0].toUpperCase() + str.substring(1);
};
