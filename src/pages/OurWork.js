import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Subtext from "../components/Subtext";
import Underline from "../components/Underline";
import colors from "../utils/colors";
import underline from "../images/underline1.svg";
import Line from "../components/Line";
import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";
import work4 from "../images/work4.png";
import work5 from "../images/work5.png";
import work6 from "../images/work6.png";
import magnifying from "../images/magnifying.svg";

const OurWork = () => {
  const leftTheme = {
    headerColor: colors.black,
    subColor: colors.gray,
    subWidth: "23rem",
  };

  const rightTheme = {
    subColor: colors.gray,
    subWidth: "47rem",
    subTop: "0rem",
  };

  return (
    <Container>
      <TopSection>
        <ThemeProvider theme={leftTheme}>
          <LeftSide>
            <Header>
              Our work
              {/* <Underline image={underline} /> */}
            </Header>
            <Subtext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Subtext>
          </LeftSide>
        </ThemeProvider>
        <ThemeProvider theme={rightTheme}>
          <RightSide>
            <Line />
            <Subtext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et justo
              ornare tempor morbi lorem sit. Sed pharetra ornare egestas libero
              hac vel sit mi pellentesque. Cum nulla in ornare sagittis dolor
              mollis lorem. Dui cum faucibus id at faucibus nun.
            </Subtext>
          </RightSide>
        </ThemeProvider>
      </TopSection>
      <BotSection>
        <Row>
          <ImageContainer>
            <Magnifying src={magnifying} />
            <BigImage src={work1} />
          </ImageContainer>
          <ImageContainer>
            <Magnifying src={magnifying} />
            <SmallImage src={work2} />
          </ImageContainer>
          <ImageContainer>
            <Magnifying src={magnifying} />
            <MediumImage src={work3} />
          </ImageContainer>
        </Row>
        <Row>
          <ImageContainer>
            <Magnifying src={magnifying} />
            <SmallImage src={work4} />
          </ImageContainer>
          <ImageContainer>
            <Magnifying src={magnifying} />
            <BigImage src={work5} />
          </ImageContainer>
          <ImageContainer>
            <Magnifying src={magnifying} />
            <MediumImage src={work6} />
          </ImageContainer>
        </Row>
      </BotSection>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 12rem;
  margin-right: 12rem;
`;

const TopSection = styled.section`
  display: flex;
`;
const BotSection = styled.section`
  margin-top: 12.75rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.81rem;
`;

const LeftSide = styled.div`
  margin-right: auto;
  margin-top: 10rem;
`;

const RightSide = styled.aside`
  position: relative;
  margin-top: 10rem;
  display: flex;
`;

const ImageContainer = styled.div`
  background-color: ${colors.primary};
  height: 19.5rem;
  position: relative;
`;

const BigImage = styled.img`
  /* flex: 1.1; */
  height: 19.5rem;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 40%;
  }
`;
const MediumImage = styled.img`
  /* flex: 1; */
  height: 19.5rem;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 40%;
  }
`;
const SmallImage = styled.img`
  /* flex: 0.8; */
  height: 19.5rem;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 40%;
  }
`;

const Magnifying = styled.img`
  position: absolute;
  top: 30%;
  left: 40%;
  display: none;
  transition: display 300ms ease-in-out;
  ${ImageContainer}:hover & {
    display: block;
  }
`;
export default OurWork;
