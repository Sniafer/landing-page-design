import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import colors from "../utils/colors";
import Card from "./Card";
import Header from "./Header";
import Subtext from "./Subtext";

const MeetUs = () => {
  const theme = {
    backgroundColor: colors.white,
    cardHeaderColor: colors.primary,
    textColor: colors.gray,
    sectionColor: colors.light,
    subColor: colors.gray,
  };

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Article>
          <HeaderWrapper>
            <Header>Meet us</Header>
          </HeaderWrapper>
          <Subtext>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ea
            eos vitae sed. Sapiente non culpa aliquid quasi quo illum. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </Subtext>
          <CardContainer>
            <Card />
          </CardContainer>
        </Article>
      </Section>
    </ThemeProvider>
  );
};

const Section = styled.section`
  margin-top: 5.25rem;
  background-color: ${({ theme }) => theme.sectionColor || colors.white};
  width: 100%;
  padding-bottom: 5.25rem;
`;

const Article = styled.article`
  margin-left: 9rem;
  margin-right: 9rem;
  @media (max-width: 1200px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 7.87rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default MeetUs;
