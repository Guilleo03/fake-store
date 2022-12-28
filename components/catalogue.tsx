import { FC } from "react";
import { Product } from "@utils/types";
import Card from "./card";

type Props = {
  products: Product[];
};

const Catalogue: FC<Props> = ({ products }) => {
  return (
    <div className="catalogue">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
