import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  min-height: 90vh;
  padding: 0 260px;
  justify-content: space-between;
  background-color: #073044;
  color: white;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    padding: 8vh 200px;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const HeaderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35vw;
  gap: 80px;

  @media screen and (max-width: 950px) {
    max-width: 60vw;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 60px;
  font-family: "Poppins";

  @media screen and (max-width: 950px) {
    font-size: 50px;
  }
`;

export const HeaderText = styled.p`
  margin: 0;
  font-size: 25px;
  font-family: "Nunito";
  line-height: 1.5;

  @media screen and (max-width: 950px) {
    font-size: 22px;
  }
`;

export const SocialsContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 50px;
  align-items: center;

  @media screen and (max-width: 950px) {
    margin: 0 auto;
  }
`;

export const SocialIcon = styled.div`
  transition-duration: 0.2s;
  width: 35px;
  height: 38px;
  .instagram,
  .facebook {
    path {
      transition-duration: 0.8s;
    }
  }

  :hover {
    .facebook {
      path {
        fill: #a81efc;
      }
    }

    .instagram {
      path {
        fill: #db3d89;
      }
    }
  }

  @media screen and (max-width: 950px) {
    width: 30px;
    height: 32px;
  }
`;

const drawLine = keyframes`
    from {
        width: 0px;
        opacity: 0;
    } 
    to{
        width: 220px;
        opacity: 1;
    }
  }
`;

export const Line = styled.div`
  height: 2px;
  background-color: white;
  width: 0px;
  animation: ${drawLine} 1s forwards;
`;
