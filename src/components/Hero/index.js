import React from "react";
import { HeroContainer, HeroBackground, VideoBackground } from "./HeroElement";
import Video from "../../video/video.mp4";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
    </HeroContainer>
  );
};

export default Hero;
