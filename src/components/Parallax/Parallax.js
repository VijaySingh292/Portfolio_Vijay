import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "../../assets/quote-background.gif"; // Ensure the correct path and extension
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-0.0000000000001} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
          and Just Another Tony Stark's STYLE Lover <br />
          
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
