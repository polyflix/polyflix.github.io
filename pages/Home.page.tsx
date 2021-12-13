import { NextPage } from "next";
import { Description } from "../components/description/description.component";
import { Features } from "../components/features/features.component";
import { Jumbotron } from "../components/jumbotron/jumbotron.component";
import { PageLayout } from "../layouts/page/page.layout";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout
        seo={{
          title: "Polyflix",
        }}
      >
        <Jumbotron />
        <Features />
        <Description />
      </PageLayout>
    </>
  );
};

export default Home;
