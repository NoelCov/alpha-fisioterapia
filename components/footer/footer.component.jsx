import React from "react";

import {
  FooterContainer,
  InformationText,
  InformationContainer,
  InformationTitle,
  CompanyTitle
} from "./footer.styles";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <InformationContainer>
        <CompanyTitle>ALPHA FISIOTERAPIA</CompanyTitle>
        <InformationText>Copyright: &copy; 2021</InformationText>
        <InformationText>
          {"Developed by "}
          <a href="https://twitter.com/No3l_Codes" target="_blank">
            {"Noel Covarrubias"}
          </a>
        </InformationText>
      </InformationContainer>
      <InformationContainer>
        <InformationTitle>VEN A VISITARNOS</InformationTitle>
        <InformationText>{"Sierra de Tepoztlán #128 A Bosques del Prado Sur, Aguascalientes, Ags"}</InformationText>
        <InformationText>{"+52 (449) 475-9541"}</InformationText>
      </InformationContainer>
      <InformationContainer>
        <InformationTitle>LINKS</InformationTitle>
        <InformationText><a href="https://www.facebook.com/Alphafisioags" target="_blank">Facebook</a></InformationText>
        <InformationText><a href="https://www.instagram.com/alphafisioags/" target="_blank">Instagram</a></InformationText>
      </InformationContainer>
    </FooterContainer>
  );
};

export default FooterComponent;
