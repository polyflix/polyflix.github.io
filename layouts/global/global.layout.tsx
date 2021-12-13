import Head from "next/head";
import { PropsWithChildren } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Header } from "../../components/header/header.component";
import { Seo } from "../../shared/types/seo.type";

type GlobalLayoutProps = {};

export const GlobalLayout = ({
  children,
}: PropsWithChildren<GlobalLayoutProps>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
