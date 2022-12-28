import CardMUI from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Product } from "@utils/types";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function Card({ product }: Props) {
  const { id, title, price, image, rating } = product;
  return (
    <Link href={`/product/${id}`} style={{ textDecoration: "none" }}>
      <CardMUI
        sx={{ maxWidth: 345, height: 320, padding: 2, position: "relative" }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={title}
          style={{ backgroundSize: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="cardTitle"
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            position: "absolute",
            bottom: 0,
            right: "2rem",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color={"primary"}
          >
            ${price}
          </Typography>
        </CardActions>
      </CardMUI>
    </Link>
  );
}
