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

  @media screen and (max-width: 950px) {
    min-height: 100vh;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    gap: 50px;
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
    margin-bottom: 5vh;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  gap: 50px;

  @media screen and (max-width: 950px) {
    text-align: center;
    align-items: center;
    min-width: 90%;
  }
`;

export const ActionButton = styled.a`
  background-color: #db3d89;
  font-family: "Nunito";
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
