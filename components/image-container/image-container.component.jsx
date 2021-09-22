import React from "react";

import { ImageBorder } from "./image-container.styles";

const ImageContainer = ({ children }) => {
  return <ImageBorder>{children}</ImageBorder>;
};

export default ImageContainer;
