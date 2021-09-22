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
    width: 100%;
    margin: 0 auto;
    gap: 50px;
  }
`;

export const CardTitle = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 1.4rem;

  @media screen and (max-width: 950px) {
    font-size: 1.2rem;
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
`;
