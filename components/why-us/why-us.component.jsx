import React from "react";
import Image from "next/image";

import {
  WhyUsContainer,
  WhyUsContentContainer,
  TextContainer,
  ImageContainer,
} from "./why-us.styles";

import SectionSubHeader from "../utils/section-subheader.component";
import SectionText from "../utils/section-text.component";
import Container from "../container/container.component";

const WhyUsComponent = () => {
  return (
    <WhyUsContainer id="why-us">
      <SectionSubHeader>¿PORQUÉ NOSOTROS?</SectionSubHeader>
      <Container>
        <WhyUsContentContainer>
          <TextContainer>
            <SectionText>
              Somos la única y mejor clinica de Fisioterapia que se especializa
              y realiza deporte. Buscamos mejorar tus capacidades constantemente
              a través del movimiento para que no dejes de hacer lo que te
              gusta y que regreses a practicar deporte lo antes posible.
              <span style={{ color: "#db3d89" }}>
                <span>&nbsp;</span> Sin dolor. Sin limitaciones
              </span>
            </SectionText>
            <Image src="/images/dumbell.png" width={100} height={100} />
          </TextContainer>
          <ImageContainer>
            <Image
              src="/images/alpha-why-us.jpg"
              width={900}
              height={720}
              alt="team member attending client"
            />
          </ImageContainer>
        </WhyUsContentContainer>
      </Container>
    </WhyUsContainer>
  );
};

export default WhyUsComponent;
