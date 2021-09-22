import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 150px;

  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 50px;
  }

  @media screen and (max-width: 550px) {
    gap: 35px;
  }
`;

export const CardTitle = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 1.4rem;

  @media screen and (max-width: 950px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
  }
`;

export const CardText = styled.p`
  margin: 0;
  font-family: "Nunito";
  line-height: 1.8;
  font-size: 1.2rem;

  @media screen and (max-width: 950px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 550px) {
    line-height: 1.6;
  }
`;

const CardContainer = css`
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 40px;
  box-shadow: black 0px 3px 6px 0px;
  gap: 50px;
  min-height: 55%;
  background-color: #d9d9d9;
  background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);

  @media screen and (max-width: 950px) {
    gap: 20px;
    padding: 30px;
    border-radius: 2%;
    min-height: 0;
  }

  @media screen and (max-width: 550px) {
    gap: 10px;
    padding: 15px;
  }
`;

export const CardContainer1 = styled.div`
  ${CardContainer}
  border-radius: 15% 15% 15% 1%;

  @media screen and (max-width: 950px) {
    ${CardContainer}
  }
`;

export const CardContainer2 = styled.div`
  ${CardContainer}
  border-radius: 15% 15% 1% 15%;

  @media screen and (max-width: 950px) {
    ${CardContainer}
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 150px;

  @media screen and (max-width: 550px) {
    gap: 120px;
  }
`;

export const ImageBorder = styled.div`
  border: 2px solid #b5c9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: 510px;
  border-radius: 2.5px;

  @media screen and (max-width: 950px) {
    padding: 5px 0;
    max-width: 510px;
    border: 2px solid #b5c9d9;
  }

  @media screen and (max-width: 550px) {
    padding: 5px;
    border: 1px solid #b5c9d9;
    max-width: 85vw;
  }
`