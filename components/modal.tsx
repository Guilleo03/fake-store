import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ModalMUI from "@mui/material/Modal";
import { useStore } from "../store";
import ProductList from "./productList";
import { getTotal } from "@utils/functions";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: 600,
  overflowY: "scroll",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Modal({ open, setOpen }: Props) {
  const { cart, emptyCart } = useStore();

  return (
    <div>
      <ModalMUI
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {cart.length > 0 && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <b>Total: {getTotal(cart)}</b>
                <Button
                  color="warning"
                  variant="outlined"
                  onClick={() => emptyCart()}
                >
                  empty cart
                </Button>
              </div>
              <br />
              <hr />
              <ProductList cart={cart} />
            </>
          )}
        </Box>
      </ModalMUI>
    </div>
  );
}
