import Head from "next/head";

import React from "react";

import Layout from "../components/layout/layout.component";
import GalleryComponent from "../components/gallery/gallery.component";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Alpha Fisioterapia - Gallery</title>
      </Head>
      <Layout>
        <GalleryComponent />
      </Layout>
    </>
  );
};

export default Gallery;
