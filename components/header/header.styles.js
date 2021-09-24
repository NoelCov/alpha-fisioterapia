import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #073044;
  color: white;
  min-height: 91vh;
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 950px) {
    min-height: 100vh;
    padding: 0;
  }

  @media screen and (max-width: 550px) {
    min-height: 0;
    padding: 5vh 0;
  }
`;

export const ImageContainer = styled.div`
  border: 1.5px solid #b5c9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 950px) {
    width: 85%;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  gap: 100px;

  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    padding: 8vh 0;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const HeaderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 80px;

  @media screen and (max-width: 950px) {
    width: 70%;
  }

  @media screen and (max-width: 550px) {
    width: 95%;
    gap: 45px;
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

  @media screen and (max-width: 550px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 400px) {
    width: 80vw;
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

  @media screen and (max-width: 550px) {
    width: 25px;
    height: 28px;
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


