import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import onClickOutside from "react-onclickoutside";

import {
  NavbarContainer,
  LinksContainer,
  LinkContainer,
  HamburgerMenu,
  HamburgerBar,
} from "./navbar.styles";

const NavbarComponent = () => {
  const [hidden, toggleHidden] = useState(true);

  const onClick = () => toggleHidden(!hidden);

  NavbarComponent.handleClickOutside = () => toggleHidden(true);

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
        <LinkContainer onClick={onClick}>
          <a href="/#visit-us">Crea una cita </a>
        </LinkContainer>
        <LinkContainer onClick={onClick}>
          <a href="/#why-us">¿Porqué nosotros? </a>
        </LinkContainer>
        <LinkContainer onClick={onClick}>
          <a href="/#our-team">Nuestro equipo </a>
        </LinkContainer>
        <LinkContainer onClick={onClick}>
          <Link href="/gallery">Nuestro trabajo </Link>
        </LinkContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NavbarComponent.handleClickOutside,
};

export default onClickOutside(NavbarComponent, clickOutsideConfig);
