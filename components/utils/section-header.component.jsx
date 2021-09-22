import styled from "styled-components";

import React from "react";

const SectionHeaderContainer = styled.h2`
  margin: 0;
  font-size: 3.5rem;
  font-family: "Poppins";

  @media screen and (max-width: 950px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;

const SectionHeader = ({ children }) => {
  return <SectionHeaderContainer>{children}</SectionHeaderContainer>;
};

export default SectionHeader;