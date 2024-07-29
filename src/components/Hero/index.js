import React from "react";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  SpanI,
} from "./HeroElement";
import Video from "../../video/video.mp4";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBackground>
        <VideoBackground
          autoPlay
          playsinline
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </HeroBackground>
      <HeroContent>
        <HeroH1 style={{ textTransform: "uppercase" }}>
          Atest Shop Croatia
        </HeroH1>
        <HeroP>
          From <SpanI>illegal</SpanI> to legal!
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
