import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import Header from "@components/header";
import Modal from "@components/modal";

export default function App({ Component, pageProps }: AppProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Modal open={openModal} setOpen={setOpenModal} />
      <Component {...pageProps} />
    </>
  );
}
