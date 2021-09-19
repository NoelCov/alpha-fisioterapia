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
            height={80}
            width={80}
          />
        </a>
      </Link>

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
