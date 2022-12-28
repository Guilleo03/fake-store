import { FC } from "react";
import RadioGroup from "./radioGroup";
import { Category } from "@utils/types";

type Props = {
  categories: Category[];
};

const CategoryFilter: FC<Props> = ({ categories }) => {
  return <RadioGroup title="Categories" options={categories} />;
};

export default CategoryFilter;
