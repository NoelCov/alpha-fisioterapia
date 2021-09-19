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
    position: absolute;
    z-index: 1;
    display: ${(props) => (props.hidden ? "none" : "flex")};
    flex-direction: column;
    justify-items: center;
    text-align: center;
    padding-top: 5vh;
    gap: 60px;
    top: 7vh;
    right: 0;
    height: 100vh;
    background-color: inherit;
    width: 250px;
  }
`;

export const LinkContainer = styled.li`
  font-size: 18px;
  padding: 15px 20px;
  border-radius: 5px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: inherit;
    border-radius: 50%;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const HamburgerBar = styled.span`
  width: 25px;
  background-color: white;
  height: 2px;
`;
