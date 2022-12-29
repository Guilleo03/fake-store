import create from "zustand";
import { Category, Product } from "@utils/types";

import { sortByPrice, sortByPopularity } from "@utils/functions";
import { getProductsInCategory } from "@utils/api";

interface State {
  catalogue: Product[];
  defaultCatalogue: (catalogue: Product[]) => void;
  sortByPriceDesc: () => void;
  sortByPriceAsc: () => void;
  sortByPopularity: () => void;
  sortByCategory: (category: Category) => void;
}

export const useStore = create<State>((set) => ({
  catalogue: [],
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
}));
