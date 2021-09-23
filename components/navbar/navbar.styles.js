import styled from "styled-components";

export const NavbarContainer = styled.nav`
  margin: 0;
  padding: 0 2vw;
  display: flex;
  align-items: center;
  background-color: #073044;
  color: white;
  font-family: "Nunito";
  border-bottom: 0.5px solid white;
  max-width: 100%;

  @media screen and (max-width: 950px) {
    padding: 0 5vw;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;
  align-items: center;

  @media screen and (max-width: 950px) {
    position: fixed;
    margin: 0;
    z-index: 1;
    display: "flex";
    flex-direction: column;
    justify-items: center;
    text-align: center;
    padding-top: 10vh;
    gap: 60px;
    top: 0;
    right: ${(props) => props.hidden ? "-300px" : "0"};
    min-height: 100vh;
    background-color: #233044;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 0px 1px 0px, rgba(0, 0, 0, 0.5) 0px 11px 20px -8px;
    width: 250px;
    transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const LinkContainer = styled.a`
  font-size: 18px;
  padding: 15px 20px;
  border-radius: 5px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  @media screen and (max-width: 950px) {
    max-width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    z-index: 2;
    margin-left: auto;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.hidden ? "none" : "#233044"};
    border-radius: 50%;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  @media screen and (max-width: 550px) {
    gap: 4px;
  }
`;

export const HamburgerBar = styled.span`
  width: 25px;
  background-color: white;
  height: 2px;

  @media screen and (max-width: 550px) {
    width: 20px;
  }
`;
