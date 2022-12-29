import create from "zustand";
import { Category, Product } from "@utils/types";

import { sortByPrice, sortByPopularity } from "@utils/functions";
import { getProductsInCategory } from "@utils/api";

interface State {
  catalogue: Product[];
  cart: { product: Product; quantity: number }[];

  defaultCatalogue: (catalogue: Product[]) => void;
  sortByPriceDesc: () => void;
  sortByPriceAsc: () => void;
  sortByPopularity: () => void;
  sortByCategory: (category: Category) => void;

  emptyCart: () => void;
  addProduct: (product: Product, quantity: number) => void;
  removeProduct: (product: Product) => void;
}

export const useStore = create<State>((set) => ({
  catalogue: [],
  cart: [],

  defaultCatalogue: (catalogue) =>
    set(() => ({
      catalogue: catalogue,
    })),

  sortByPriceDesc: () =>
    set((state) => ({
      catalogue: sortByPrice(state.catalogue, "desc"),
    })),

  sortByPriceAsc: () =>
    set((state) => ({
      catalogue: sortByPrice(state.catalogue, "asc"),
    })),

  sortByPopularity: () =>
    set((state) => ({
      catalogue: sortByPopularity(state.catalogue),
    })),

  sortByCategory: async (category) => {
    const catalogue = await getProductsInCategory(category).then(
      (data) => data
    );
    set(() => ({ catalogue: catalogue }));
  },

  emptyCart: () =>
    set(() => ({
      cart: [],
    })),

  addProduct: (product, quantity) => {
    set((state) => ({
      cart: [
        ...state.cart.filter((p) => p.product.id != product.id),
        { product, quantity },
      ],
    }));
  },

  removeProduct: (product) => {
    set((state) => ({
      cart: state.cart.filter((p) => p.product.id != product.id),
    }));
  },
}));
