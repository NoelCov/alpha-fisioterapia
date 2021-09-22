import styled from "styled-components";

import React from "react";

const SectionSubheaderContainer = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-family: "Poppins";

  @media screen and (max-width: 950px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.4rem;
  }
`;

const SectionSubheader = ({ children }) => {
  return <SectionSubheaderContainer>{children}</SectionSubheaderContainer>;
};

export default SectionSubheader;
