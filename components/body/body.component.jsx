import React from "react";

import Container from "../container/container.component";
import GoogleApiWrapper from "../map/map.component";

import { FaWhatsapp } from "react-icons/fa";

import {
  BodyContainer,
  BodyTitle,
  ContentContainer,
  InformationContainer,
  InformationText,
  ActionButton,
  MapContainer,
} from "./body.styles";

const Body = () => {
  return (
    <BodyContainer id="why-us">
      <BodyTitle>VEN A VISITARNOS</BodyTitle>
      <Container>
        <ContentContainer>
          <MapContainer>
            <GoogleApiWrapper />
          </MapContainer>
          <InformationContainer>
            <InformationText>
              📍 Sierra de Tepoztlán #128 A Bosques del Prado Sur,
              Aguascalientes, Ags
            </InformationText>
            <InformationText>
              <FaWhatsapp style={{color: "#24cc63"}} />
              <span>&nbsp;</span>+52 449 555 4345
            </InformationText>
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
