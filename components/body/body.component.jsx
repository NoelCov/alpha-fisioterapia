import React from "react";

import Container from "../container/container.component";
import GoogleApiWrapper from "../map/map.component";
import SectionSubHeader from "../utils/section-subheader.component";
import SectionText from "../utils/section-text.component";

import { FaWhatsapp } from "react-icons/fa";

import {
  BodyContainer,
  ContentContainer,
  InformationContainer,
  ActionButton,
  MapContainer,
} from "./body.styles";

const Body = () => {
  return (
    <BodyContainer id="visit-us">
      <SectionSubHeader>VEN A VISITARNOS</SectionSubHeader>
      <Container>
        <ContentContainer>
          <MapContainer>
            <GoogleApiWrapper />
          </MapContainer>
          <InformationContainer>
            <SectionText>
              📍 Sierra de Tepoztlán #128 A Bosques del Prado Sur,
              Aguascalientes, Ags
            </SectionText>
            <SectionText>
              <FaWhatsapp style={{ color: "#24cc63" }} />
              <span>&nbsp;</span>+52 (449) 475-9541
            </SectionText>
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
