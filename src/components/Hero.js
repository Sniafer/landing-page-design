import styled from "styled-components";
import heroImage from "../images/hero-image.png";
import underline from "../images/underline1.svg";
import background from "../images/background.png";
import colors from "../utils/colors";
import Header from "./Header";
import Underline from "./Underline";
import Subtext from "./Subtext";
import CallToAction from "./CallToAction";

const Hero = () => {
  const theme = {
    underline: colors.gray,
    buttonColor: colors.white,
    backgroundColor: colors.primary,
    headerColor: colors.black,
    headerWidth: "29rem",
  };

  return (
    <HeroSection>
      <LeftSide>
        <Header theme={theme}>
          We make your work look amazing
          <Underline image={underline} />
        </Header>
        <Subtext theme={theme}>Beatiful desgins at your fingertips</Subtext>
        <CallToAction theme={theme}>See more</CallToAction>
      </LeftSide>
      <RightSide>
        <Image src={heroImage} />
        <Background src={background} />
      </RightSide>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  display: flex;
  margin-left: 12rem;
  margin-right: 12rem;
`;
const LeftSide = styled.div`
  margin-right: auto;
  margin-top: 10rem;
`;

const RightSide = styled.aside`
  position: relative;
  margin-top: 8.12rem;
`;
const Image = styled.img`
  width: 51.5rem;
  height: 38.38rem;
`;
const Background = styled.img`
  width: 52.63rem;
  height: 39.5rem;
  position: absolute;
  right: 0rem;
  z-index: -1;
  opacity: 55%;
`;
