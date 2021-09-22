import React from "react";

import SectionSubheader from "../utils/section-subheader.component";
import Container from "../container/container.component";
import { BigContainer, SmallContainer } from "../team-member-container/team-member-container.component"

import {
  OurTeamContainer,
  TeamContent,
  BigScreen,
  SmallScreen
} from "./our-team.styles";

const OurTeam = () => {
  return (
    <OurTeamContainer>
      <SectionSubheader>NUESTRO EQUIPO</SectionSubheader>
      <Container>
        <TeamContent>
          <BigScreen>
            <BigContainer />
          </BigScreen>
          <SmallScreen>
            <SmallContainer />
          </SmallScreen>
        </TeamContent>
      </Container>
    </OurTeamContainer>
  );
};

export default OurTeam;
