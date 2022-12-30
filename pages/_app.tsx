import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";
import Header from "@components/header";
import Modal from "@components/modal";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Header setOpenModal={setOpenModal} />
        <Modal open={openModal} setOpen={setOpenModal} />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
