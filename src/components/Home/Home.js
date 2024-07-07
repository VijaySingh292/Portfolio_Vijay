import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
      <StyledHome id="home">
        <Name>hi , I'm Vijay Shankar Singh</Name>
        <Title>Full Stack Web Developer</Title>
        
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About me</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line color="green"/>
        <Greeting>
          HAVE A GREAT 
          <span>
            {hour < 12 ? " MORNING" : hour < 18 ? " AFTERNOON" : " EVENING"}
          </span>
          .
        </Greeting>
      </StyledHome>
  );
};

export default Home;
