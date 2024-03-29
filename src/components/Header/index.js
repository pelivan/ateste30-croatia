import React, { useEffect, useState } from "react";
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
  const [scrollHeader, setScrollHeader] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 130) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollHeader={scrollHeader}>
        <HeaderContainer>
          <HeaderLogo to="/" onClick={toggleHome}>
            Atest Shop Croatia
          </HeaderLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth="true" duration="600">
                O nama
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gallery" smooth="true" duration="600">
                Galerija
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth="true" duration="600">
                Kontakt
              </NavLinks>
            </NavItem>
          </NavMenu>
        </HeaderContainer>
      </Nav>
    </>
  );
};

export default Header;
