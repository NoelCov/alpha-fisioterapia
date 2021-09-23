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

  const onClick = () => {
    toggleHidden(!hidden);
  };

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

      <HamburgerMenu onClick={onClick} hidden={hidden}>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </HamburgerMenu>

      <LinksContainer hidden={hidden}>
        <LinkContainer href="/#visit-us" onClick={onClick}>
          Crea una cita
        </LinkContainer>
        <LinkContainer href="/#why-us" onClick={onClick}>
          ¿Porqué nosotros?
        </LinkContainer>
        <LinkContainer href="/#our-team" onClick={onClick}>
          Nuestro equipo
        </LinkContainer>
        <LinkContainer onClick={onClick}>
          <Link href="/gallery">Nuestro trabajo</Link>
        </LinkContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default NavbarComponent;
