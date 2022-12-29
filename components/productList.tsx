import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Product } from "@utils/types";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useStore } from "../store";

type Props = {
  cart: { product: Product; quantity: number }[];
};

export default function ProductList({ cart }: Props) {
  const { removeProduct } = useStore();

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {cart &&
        cart.map((p) => (
          <div>
            <ListItem alignItems="flex-start">
              <Image
                className="imgCart"
                src={p.product.image}
                alt=""
                width={64}
                height={64}
              />
              <ListItemText
                primary={p.product.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <b>${p.product.price}</b>
                    </Typography>
                    <br />
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Quantity: {p.quantity}
                    </Typography>
                    <br />
                    <Button
                      className="btnRemoveProduct"
                      variant="contained"
                      color="error"
                      onClick={() => removeProduct(p.product)}
                    >
                      remove product
                    </Button>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
    </List>
  );
}
