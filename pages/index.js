import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Header from "../components/header/header.component";
import Body from "../components/body/body.component";
import WhyUsComponent from "../components/why-us/why-us.component";
import OurTeam from "../components/our-team/our-team.component";
import LandingImage from "../public/images/alpha-group.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Fisioterapia - HomePage</title>
        <meta
          name="description"
          content="Alpha Fisioterapia es una clinica localizada en Aguascalientes, MX. En donde apoyamos a personas con dolores y/o problemas musculares a traves del movimiento.
          Con el fin de que se recuperen y puedan volver a realizar sus actividades lo mas pronto posible."
        />
        <meta
          name="og:description"
          content="Somos la única y mejor clinica de Fisioterapia que se especializa y realiza deporte."
        />
        <meta name="og:image" content={LandingImage} />
        <meta property="twitter:url" content="https://alphafisioterapia.com/" />
        <meta
          property="twitter:title"
          content="Alpha Fisioterapia - HomePage"
        />
        <meta
          property="twitter:description"
          content="Alpha Fisioterapia es una clinica localizada en Aguascalientes, MX. En donde apoyamos a personas con dolores y/o problemas musculares a traves del movimiento.
          Con el fin de que se recuperen y puedan volver a realizar sus actividades lo mas pronto posible."
        />
        <meta property="twitter:image" content={LandingImage} />
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
