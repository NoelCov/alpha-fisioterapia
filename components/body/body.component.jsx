import React from "react";

import Container from "../container/container.component";
import Image from "next/image";

import {
  BodyContainer,
  BodyTitle,
  ContentContainer,
  InformationContainer,
  InformationText,
  ActionButton,
} from "./body.styles";

const Body = () => {
  return (
    <BodyContainer id="why-us">
      <BodyTitle>VEN A VISITARNOS</BodyTitle>
      <Container>
        <ContentContainer>
          <Image src="/images/51.svg" height={400} width={500} />
          <InformationContainer>
            <InformationText>
              📍 - Sierra de Tepoztlán #128 A Bosques del Prado Sur,
              Aguascalientes, Ags
            </InformationText>
            <InformationText>📞 - 449 555 4345 (Whatsapp)</InformationText>
          </InformationContainer>
        </ContentContainer>
      </Container>
      <ActionButton href="mailto:alpha.physio20@gmail.com">
        CONTACTANOS
      </ActionButton>
    </BodyContainer>
  );
};

export default Body;
