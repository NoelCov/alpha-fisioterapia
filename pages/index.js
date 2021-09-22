import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Header from "../components/header/header.component";
import Body from "../components/body/body.component";
import WhyUsComponent from "../components/why-us/why-us.component";
import OurTeam from "../components/our-team/our-team.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Fisioterapia - HomePage</title>
      </Head>
      <Layout>
        <Header />
        <Body />
        <WhyUsComponent />
        <OurTeam />
      </Layout>
    </>
  );
}
