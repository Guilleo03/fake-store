import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ModalMUI from "@mui/material/Modal";
import { useStore } from "../store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Modal({ open, setOpen }: Props) {
  const { cart } = useStore();

  console.log(cart);

  return (
    <div>
      <ModalMUI
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </ModalMUI>
    </div>
  );
}
