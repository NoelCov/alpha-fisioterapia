import styled from "styled-components";

export const Container = styled.div`
  max-width: 75vw;
  margin: 0 auto;

  @media screen and (max-width: 950px) {
  max-width: 85vw;
  }

  @media screen and (max-width: 550px) {
  max-width: 95vw;
  }
`