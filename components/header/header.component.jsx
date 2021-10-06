import React from "react";
import Image from "next/image";

import Container from "../container/container.component";
import SectionHeader from "../utils/section-header.component";
import SectionText from "../utils/section-text.component";

import {
  HeaderContainer,
  ContentContainer,
  HeaderInformationContainer,
  SocialsContainer,
  SocialIcon,
  Line,
  ImageContainer,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <ContentContainer>
          <ImageContainer>
            <Image
              src="/images/alpha-group.jpg"
              width={2652}
              height={2122}
              alt="our team"
              priority={true}
            />
          </ImageContainer>

          <HeaderInformationContainer>
            <SectionHeader>ALPHA FISIOTERAPIA</SectionHeader>
            <SectionText>
              Nosotros nos compremetemos a ayudarte a traves del movimiento para
              que mejores desde el primer dia y ¡no pares de hacer lo que te
              gusta!
            </SectionText>
            <SocialsContainer>
              <Line />
              <a
                href="https://www.instagram.com/alphafisioags/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SocialIcon>
                  <svg
                    fill="#a81efc"
                    viewBox="0 0 1024 1024"
                    className="instagram"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                  </svg>
                </SocialIcon>
              </a>
              <a
                href="https://www.facebook.com/Alphafisioags"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SocialIcon>
                  <svg
                    fill="#DB3D89"
                    viewBox="0 0 1024 1024"
                    className="facebook"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                  </svg>
                </SocialIcon>
              </a>
            </SocialsContainer>
          </HeaderInformationContainer>
        </ContentContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
