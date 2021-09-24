import React from "react";
import Image from "next/image";

import {
  CardTitle,
  CardText,
  CardContainer1,
  CardContainer2,
  Container,
  ContentContainer,
  ImageBorder,
} from "./team-member-container.styles";

const TeamMemberContainerLeft = ({ img, name, text }) => {
  return (
    <Container>
      <ImageBorder>
        <Image src={img} width={3000} height={4000} alt="team member" />
      </ImageBorder>
      <CardContainer1>
        <CardTitle>{name}</CardTitle>
        <CardText>{text}</CardText>
      </CardContainer1>
    </Container>
  );
};

const TeamMemberContainerRight = ({ img, name, text }) => {
  return (
    <Container>
      <CardContainer2>
        <CardTitle>{name}</CardTitle>
        <CardText>{text}</CardText>
      </CardContainer2>
      <ImageBorder>
        <Image src={img} width={3000} height={4000} alt="team member" />
      </ImageBorder>
    </Container>
  );
};

const alejandraText = `Gran parte de mi vida he practicado y he aprendido diversos deportes
como el atletismo, fútbol, calistenia y yoga. Gracias a que soy una persona apasionada por el movimiento y
la actividad física he logrado implementar el ejercicio con mis pacientes para enseñarles
el mejor camino para tratar su recuperación, tratando y enseñándoles sobre su dolor, limitación y lesiones. Para 
llegar a todo aquel que sufra de dolor y quiera vivir plenamente. Me encanta moverme, aprender y enseñar a través del
 movimiento.`;

const luisText = `Fisioterapeuta, atleta de crossfit y judoka. Toda mi vida he buscado ser una persona
dinámica. Me interesan los cambios y los desafíos que estos puedan representar.
A través de la fisioterapia busco mantener a nuestros clientes sanos, activos y en movimiento.`;

const davidText = `Fisioterapeuta, docente y practicante del deporte de fuerza, con un claro enfoque en la
mejora constante y el aprendizaje, tanto personal y profesional así como con nuestros pacientes, en
la búsqueda de la adquisición y mejoramiento de las capacidades físicas a través del movimiento y la
re-educación.`;

export const BigContainer = () => {
  return (
    <ContentContainer>
      <TeamMemberContainerLeft
        img="/images/team-members/alpha-ale.jpg"
        name="Alejandra"
        text={alejandraText}
      />
      <TeamMemberContainerRight
        img="/images/team-members/alpha-david.jpg"
        name="David"
        text={davidText}
      />
      <TeamMemberContainerLeft
        img="/images/team-members/alpha-luis.jpg"
        name="Luis"
        text={luisText}
      />
    </ContentContainer>
  );
};

export const SmallContainer = () => {
  return (
    <ContentContainer>
      <TeamMemberContainerLeft
        img="/images/team-members/alpha-ale.jpg"
        name="Alejandra"
        text={alejandraText}
      />
      <TeamMemberContainerLeft
        img="/images/team-members/alpha-david.jpg"
        name="David"
        text={davidText}
      />
      <TeamMemberContainerLeft
        img="/images/team-members/alpha-luis.jpg"
        name="Luis"
        text={luisText}
      />
    </ContentContainer>
  );
};
