import styled, { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Subtext from "../components/Subtext";
import colors from "../utils/colors";
import Line from "../components/Line";
import magnifying from "../images/magnifying.svg";
import items from "../utils/items";
import ImageCard from "../components/ImageCard";

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
            <Header>Our work</Header>
            <Subtext left={true}>
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
          {items.slice(0, 3).map((item) => (
            <ImageCard
              image={item.image}
              key={item.id}
              classname={item.size}
              magnifying={magnifying}
              id={item.id}
            />
          ))}
        </Row>
        <Row>
          {items.slice(3, 6).map((item) => (
            <ImageCard
              image={item.image}
              key={item.id}
              classname={item.size}
              magnifying={magnifying}
              id={item.id}
            />
          ))}
        </Row>
      </BotSection>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 9rem;
  margin-right: 9rem;
  @media (max-width: 1200px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
`;

const TopSection = styled.section`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const BotSection = styled.section`
  margin-top: 9.56rem;
  margin-bottom: 2.85rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2.85rem;
  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const LeftSide = styled.div`
  margin-right: auto;
  margin-top: 7.5rem;
  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

const RightSide = styled.aside`
  position: relative;
  margin-top: 7.5rem;
  display: flex;
`;

export default OurWork;
