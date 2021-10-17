import styled from "styled-components";
import persons from "../utils/persons";

const Card = () => {
  return (
    <>
      {persons.map((person) => (
        <StyledCard key={person.name}>
          <Name>{person.name}</Name>
          <Text>{person.text} </Text>
          <Image src={person.image} />
        </StyledCard>
      ))}
    </>
  );
};

const StyledCard = styled.div`
  width: 16.17rem;
  height: 14.39rem;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  &:hover {
    transform: scale(1.03);
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 900px) {
    margin-bottom: 5rem;
  }
`;

const Name = styled.h3`
  font-size: 1.12rem;
  font-weight: 700;
  color: ${({ theme }) => theme.cardHeaderColor};
  margin-top: 4.38rem;
`;

const Text = styled.p`
  font-size: 1.12rem;
  color: ${({ theme }) => theme.textColor};
  width: 8.85rem;
  text-align: center;
  margin-top: 0.45rem;
`;

const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  top: -3rem;
`;

export default Card;
