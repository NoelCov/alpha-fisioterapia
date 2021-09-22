import styled from "styled-components";

import React from "react";

const SectionTextContainer = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Nunito";
  line-height: 1.5;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

const SectionText = ({ children }) => {
  return <SectionTextContainer>{children}</SectionTextContainer>;
};

export default SectionText;