import { FC, useEffect, useState } from "react";
import { getAllCategories } from "@utils/api";
import RadioGroup from "./radioGroup";
import { Category } from "@utils/types";

const CategoryFilter: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  return <RadioGroup title="Categories" options={categories} />;
};

export default CategoryFilter;
