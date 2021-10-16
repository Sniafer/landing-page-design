import styled from "styled-components";
import { useParams } from "react-router-dom";
import NoMatch from "../components/NoMatch";
import items from "../utils/items";
import Header from "../components/Header";
import Subtext from "../components/Subtext";
import Line from "../components/Line";

const ItemPage = () => {
  const { id } = useParams();
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) {
    return <NoMatch />;
  }

  return (
    <Container>
      <Image src={item.image} />
      <Article>
        <Header>{item.name}</Header>
        <Subtext>Lorem ipsum dolor sit amet.</Subtext>
        <Section>
          <Subtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et justo
            ornare tempor morbi lorem sit. Sed pharetra ornare egestas libero
            hac vel sit mi pellentesque. Cum nulla in ornare sagittis dolor
            mollis lorem. Dui cum faucibus id at faucibus nun.
          </Subtext>
          <Line />
          <Subtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et justo
            ornare tempor morbi lorem sit. Sed pharetra ornare sagittis dolor
            mollis lorem. Dui cum faucibus id at faucibus nun.
          </Subtext>
        </Section>
      </Article>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 7.43rem;
`;

const Article = styled.article`
  margin-left: 12rem;
  margin-right: 12rem;
`;

const Section = styled.section`
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 41rem;
  object-fit: cover;
  margin-top: 10rem;
  margin-bottom: 3.81rem;
`;

export default ItemPage;
