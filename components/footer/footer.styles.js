import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  max-width: 100vw;
  background-color: #073044;
  min-height: 20vh;
  border-top: 0.5px solid white;
  padding: 0 5vw;
  color: white;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 8vh;
    gap: 75px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Nunito";
  gap: 15px;
  height: 100%;

  @media screen and (max-width: 950px) {
    text-align: center;
    gap: 20px;
  }
`;

export const CompanyTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;

  @media screen and (max-width: 950px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const InformationTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;

  @media screen and (max-width: 950px) {
    font-size: 1rem;
  }
`;

export const InformationText = styled.p`
  margin: 0;
  font-size: 1rem;

  @media screen and (max-width: 950px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
  }
`;
