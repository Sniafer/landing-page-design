import styled from "styled-components";
import colors from "../utils/colors";
import { motion } from "framer-motion";

const CallToAction = ({ children }) => {
  const callAnimation = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 0.7,
      },
    },
  };

  return (
    <Button
      variants={callAnimation}
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </Button>
  );
};

export default CallToAction;

const Button = styled(motion.button)`
  width: 16.5rem;
  height: 4.87rem;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.68rem;
  color: ${({ theme }) => theme.buttonColor || colors.white};
  background-color: ${({ theme }) => theme.backgroundColor || colors.primary};
  border-radius: 50px;
  margin-top: 2.85rem;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  /* transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out; */
  /* &:hover {
    transform: scale(1.01);
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  } */
`;
