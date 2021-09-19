import React, { useState } from "react";
import Image from "next/image";

import {
  NavbarContainer,
  LinksContainer,
  LinkContainer,
  HamburgerMenu,
  HamburgerBar,
} from "./navbar.styles";

const NavbarComponent = () => {
  const [hidden, toggleHidden] = useState(true);

  return (
    <NavbarContainer>
      <Image
        src="/images/alpha-logo.png"
        alt="company-logo"
        height={100}
        width={100}
      />

      <HamburgerMenu onClick={() => toggleHidden(!hidden)}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerMenu>

      <LinksContainer hidden={hidden}>
        <LinkContainer>Crea una cita</LinkContainer>
        <LinkContainer>Porque nosotros?</LinkContainer>
        <LinkContainer>Nuestro trabajo</LinkContainer>
        <LinkContainer>Acerca de</LinkContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default NavbarComponent;
