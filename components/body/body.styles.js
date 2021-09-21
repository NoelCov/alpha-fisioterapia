import styled from "styled-components";

export const BodyContainer = styled.div`
  min-height: 80vh;
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #052636;
  color: white;
  font-family: "Nunito";
  min-width: 100vw;

  @media screen and (max-width: 950px) {
    padding: 10vh 0;
  }

  @media screen and (max-width: 550px) {
    padding: 10vh 0;
  }
`;

export const BodyTitle = styled.h2`
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

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 60px;
  }

  @media screen and (max-width: 550px) {
    gap: 80px;
  }
`;

export const MapContainer = styled.div`
  min-width: 45%;
  height: 400px;
  position: relative;

  @media screen and (max-width: 950px) {
    width: 90%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;

  @media screen and (max-width: 950px) {
    text-align: center;
    align-items: center;
    min-width: 90%;
  }
`;

export const InformationText = styled.p`
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 950px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const ActionButton = styled.a`
  background-color: #db3d89;
  padding: 18px 40px;
  border-radius: 2.5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    background-color: #a81efc;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
