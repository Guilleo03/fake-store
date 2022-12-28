import { FC } from "react";
import RadioGroup from "./radioGroup";
import { useStore } from "../store";

const PriceSort: FC = () => {
  const { sortByPriceAsc, sortByPriceDesc } = useStore();

  return (
    <RadioGroup
      title="Sort by price"
      options={[
        { text: "high - low", action: sortByPriceDesc },
        { text: "low - high", action: sortByPriceAsc },
      ]}
    />
  );
};

export default PriceSort;
