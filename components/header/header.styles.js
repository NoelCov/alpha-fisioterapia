import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #073044;
  color: white;
  min-height: 91vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 950px) {
    min-height: 100vh;
    padding: 10vh 0;
  }

  @media screen and (max-width: 550px) {
    min-height: 0;
    padding: 5vh 0;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 100px;

  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    padding: 10vh 0;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const HeaderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 80px;

  @media screen and (max-width: 950px) {
    width: 70%;
  }

  @media screen and (max-width: 550px) {
    width: 95%;
    gap: 45px;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3.75rem;
  font-family: "Poppins";

  @media screen and (max-width: 950px) {
    font-size: 3.1rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 2.18rem;
  }
`;

export const HeaderText = styled.p`
  margin: 0;
  font-size: 1.56rem;
  font-family: "Nunito";
  line-height: 1.5;

  @media screen and (max-width: 950px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
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
