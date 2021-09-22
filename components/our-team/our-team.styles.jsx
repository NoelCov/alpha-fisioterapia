import styled from "styled-components";

export const OurTeamContainer = styled.section`
  background-color: #052636;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10vh 0;
`;

export const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 0;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  gap: 125px;
  margin: 0 auto;

  @media screen and (max-width: 950px) {
    gap: 50px;
    padding: 5vh 0;
  }
`;

export const BigScreen = styled.div`
  display: flex;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const SmallScreen = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    display: flex;
  }
`;
