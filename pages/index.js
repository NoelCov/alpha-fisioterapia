import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Header from "../components/header/header.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Fisioterapia</title>
      </Head>
      <Layout>
        <Header />
      </Layout>
    </>
  );
}
