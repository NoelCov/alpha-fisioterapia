import Head from "next/head";

import React from "react";

import Layout from "../components/layout/layout.component";
import GalleryComponent from "../components/gallery/gallery.component";
import LandingImage from "../public/images/alpha-group.jpg";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Alpha Fisioterapia - Gallery</title>
        <meta
          name="description"
          content="Alpha Fisioterapia en Aguascalientes, MX. Galeria"
        />
        <meta
          name="og:description"
          content="Somos la única y mejor clinica de Fisioterapia que se especializa y realiza deporte."
        />
        <meta name="og:image" content={LandingImage} />
        <meta property="twitter:url" content="https://alphafisioterapia.com/" />
        <meta property="twitter:title" content="Alpha Fisioterapia - Gallery" />
        <meta
          property="twitter:description"
          content="Alpha Fisioterapia es una clinica localizada en Aguascalientes, MX. En donde apoyamos a personas con dolores y/o problemas musculares a traves del movimiento.
          Con el fin de que se recuperen y puedan volver a realizar sus actividades lo mas pronto posible."
        />
        <meta property="twitter:image" content={LandingImage} />
        <html lang='es' />
      </Head>
      <Layout>
        <GalleryComponent />
      </Layout>
    </>
  );
};

export default Gallery;
