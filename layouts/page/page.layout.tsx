import Head from "next/head";
import { PropsWithChildren } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Seo } from "../../shared/types/seo.type";

type PageLayoutProps = {
  seo: Seo;
};

export const PageLayout = ({
  seo,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        {seo.description && (
          <meta name="description" content={seo.description}></meta>
        )}
        {seo.image && <meta name="og:image" content={seo.image}></meta>}
      </Head>
      <section>{children}</section>
    </>
  );
};
