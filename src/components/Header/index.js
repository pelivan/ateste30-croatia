import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  HeaderContainer,
  HeaderLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./HeaderElement";

const Header = ({ toggle }) => {
  return (
    <>
      <Nav>
        <HeaderContainer>
          <HeaderLogo to="/">Atest E30 Croatia</HeaderLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">O nama</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery">Galerija</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
        </HeaderContainer>
      </Nav>
    </>
  );
};

export default Header;
