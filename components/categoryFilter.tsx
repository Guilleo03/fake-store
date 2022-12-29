import { FC } from "react";
import RadioGroup from "./radioGroup";
import { Category } from "@utils/types";
import { useStore } from "../store";

type Props = {
  categories: Category[];
};

const CategoryFilter: FC<Props> = ({ categories }) => {
  const { sortByCategory } = useStore();

  const categoriesOptions = categories.map((cat) => ({
    text: cat as unknown as string,
    action: () => sortByCategory(cat),
  }));

  return <RadioGroup title="Categories" options={categoriesOptions} />;
};

export default CategoryFilter;
