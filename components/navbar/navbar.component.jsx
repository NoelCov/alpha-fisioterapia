import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <Link href="/">
        <a>
          <Image
            src="/images/alpha-logo.png"
            alt="company-logo"
            width={60}
            height={60}
          />
        </a>
      </Link>

      <HamburgerMenu onClick={() => toggleHidden(!hidden)}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerMenu>

      <LinksContainer hidden={hidden}>
        <LinkContainer href="#visit-us">Crea una cita</LinkContainer>
        <LinkContainer href="#why-us">¿Porqué nosotros?</LinkContainer>
        <LinkContainer href="#our-team">Nuestro equipo</LinkContainer>
        <LinkContainer>Nuestro trabajo</LinkContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default NavbarComponent;
