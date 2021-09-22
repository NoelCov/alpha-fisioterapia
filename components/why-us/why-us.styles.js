import styled from "styled-components";

export const WhyUsContainer = styled.div`
  background-color: #073044;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  padding: 5vh 0;
  min-height: 70vh;
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
  padding: 5vh 0;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 50px;

  @media screen and (max-width: 950px) {
    width: 90%;
    text-align: center;
  }
`;