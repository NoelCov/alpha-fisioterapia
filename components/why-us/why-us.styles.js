import styled from "styled-components";

export const WhyUsContainer = styled.div`
  background-color: #073044;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  padding: 8vh 0;
  font-family: "Nunito";

  @media screen and (max-width: 550px) {
    padding: 8vh 0;
  }
`;

export const WhyUsContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 100px;
  width: 100%;
  padding: 8vh 0;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    padding: 8vh 0 2vh;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 50%;
  gap: 50px;

  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  border: 1.5px solid #b5c9d9;
  display: flex;
  align-items: center;
  padding: 2.5px;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 950px) {
    width: 85%;
  }
`;