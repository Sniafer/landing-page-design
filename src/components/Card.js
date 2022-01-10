import styled from "styled-components";
import { motion } from "framer-motion";
import persons from "../utils/persons";

const Card = () => {
  return (
    <>
      {persons.map((person) => (
        <StyledCard
          whileHover={{
            scale: 1.2,
            zIndex: 10,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.35)",
            transition: {
              duration: 0.3,
            },
          }}
          key={person.name}
        >
          <Name>{person.name}</Name>
          <Text>{person.text} </Text>
          <Text>{person.text2}</Text>
          <Image src={person.image} />
        </StyledCard>
      ))}
    </>
  );
};

const StyledCard = styled(motion.div)`
  width: 20rem;
  min-height: 18rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 1150px) {
    margin-right: 1rem;
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
  padding: 0.5rem 2rem;
  text-align: center;
  margin-top: 0.45rem;
`;

const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  top: -3rem;
`;

export default Card;
