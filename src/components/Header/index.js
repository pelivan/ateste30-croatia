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
import { animateScroll as scroll } from "react-scroll";

const Header = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <HeaderContainer>
          <HeaderLogo to="/" onClick={toggleHome}>
            Atest E30 Croatia
          </HeaderLogo>
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
