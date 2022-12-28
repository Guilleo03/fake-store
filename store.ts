import create from "zustand";
import { Product } from "@utils/types";

import { sortByPrice, sortByPopularity } from "@utils/functions";

interface State {
  catalogue: Product[];
  defaultCatalogue: (catalogue: Product[]) => void;
  sortByPriceDesc: () => void;
  sortByPriceAsc: () => void;
  sortByPopularity: () => void;
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
}));
