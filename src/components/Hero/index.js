import React from "react";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElement";
import Video from "../../video/video.mp4";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Atest & E30 Shop</HeroH1>
        <HeroP>From illegal to legal in no time!</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
