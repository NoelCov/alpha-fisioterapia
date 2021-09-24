import React from "react";

import SectionHeader from "../utils/section-header.component";
import Container from "../container/container.component";
import ImageContainer from "../image-container/image-container.component";

import { GalleryContainer, ImagesContainer } from "./gallery.styles";

import Image from "next/image";

const numberOfImages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const GalleryComponent = () => {
  return (
    <GalleryContainer>
      <SectionHeader>NUESTRO TRABAJO</SectionHeader>
        <ImagesContainer>
          {numberOfImages.map((item) => {
            return (
              <ImageContainer>
                <Image
                  src={`/images/gallery/${item}.jpg`}
                  width={900}
                  height={700}
                  alt="team member working"
                />
              </ImageContainer>
            );
          })}
        </ImagesContainer>
    </GalleryContainer>
  );
};

export default GalleryComponent;
