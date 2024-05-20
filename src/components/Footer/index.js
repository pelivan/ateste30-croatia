import React from "react";
import { FooterContainer, FooterRow } from "./FooterElement";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterRow>
        <a href="https://web.facebook.com/profile.php?id=100074323021474">
          <FaFacebook size={25} />
        </a>
        <a href="https://www.instagram.com/atest_shop_croatia/">
          <FaInstagram size={25} />
        </a>
      </FooterRow>
      <span>© &nbsp;2024 &nbsp;Atest Shop Croatia</span>
    </FooterContainer>
  );
};

export default Footer;
