import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import heroImage from "../images/monitor.svg";
import background from "../images/background.png";
import colors from "../utils/colors";
import Header from "./Header";
import Subtext from "./Subtext";
import CallToAction from "./CallToAction";
import { Link } from "react-router-dom";

const Hero = () => {
  const theme = {
    subColor: colors.gray,
    buttonColor: colors.white,
    backgroundColor: colors.primary,
    headerColor: colors.black,
    headerWidth: "21.75rem",
    subWidth: "17.25rem",
  };

  return (
    <ThemeProvider theme={theme}>
      <HeroSection>
        <LeftSide>
          <Header>We make your work look amazing</Header>
          <Subtext>Beatiful desgins at your fingertips</Subtext>
          <StyledLink to="/work">
            <CallToAction>See more</CallToAction>
          </StyledLink>
        </LeftSide>
        <RightSide>
          <Image src={heroImage} />
          <Background src={background} />
        </RightSide>
      </HeroSection>
    </ThemeProvider>
  );
};

export default Hero;

const HeroSection = styled.section`
  padding-top: 3rem;
  display: flex;
  margin-left: 9rem;
  margin-right: 9rem;
  min-height: 100vh;
  @media (max-width: 1200px) {
    margin-right: 2rem;
    margin-left: 2rem;
    padding-top: 0;
  }
`;

const LeftSide = styled.div`
  margin-right: auto;
  margin-top: 7.5rem;
  @media (max-width: 1200px) {
    margin-right: 2rem;
  }
  @media (max-width: 900px) {
    margin-right: 0;
  }
`;
const RightSide = styled.aside`
  position: relative;
  margin-top: 7.5rem;
  display: flex;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 38.72rem;
  height: 28.75rem;
`;
const Background = styled.img`
  width: 39.47rem;
  height: 29.62rem;
  position: absolute;
  right: 0;
  z-index: -1;
  opacity: 55%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
