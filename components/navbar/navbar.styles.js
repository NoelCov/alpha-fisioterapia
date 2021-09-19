import styled from "styled-components";

export const NavbarContainer = styled.nav`
  margin: 0;
  padding: 0 3vw;
  display: flex;
  align-items: center;
  background-color: #073044;
  max-width: 100vw;
  color: white;
  font-family: "Nunito";
  border-bottom: 1.8px solid white;
  //TODO change border (maybe)
`;

export const LinksContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 3vw;
  margin: 0 0 0 auto;
  @media screen and (max-width: 450px) {
    position: absolute;
    z-index: 1;
    display: ${(props) => (props.hidden ? "none" : "flex")};
    flex-direction: column;
    justify-items: center;
    padding-top: 10vh;
    gap: 100px;
    top: 10vh;
    right: 0;
    background-color: #073044;
    width: 50vw;
    min-height: 50vh;
  }
`;

export const LinkContainer = styled.li`
  font-size: 18px;
`;

export const HamburgerMenu = styled.div`
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    gap: 5px;
  }
`;

export const HamburgerBar = styled.span`
  width: 25px;
  background-color: white;
  height: 3px;
`;
