import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "../utils/colors";

const Header = ({ children }) => {
  const headerAnimation = {
    hide: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <StyledHeader
      variants={headerAnimation}
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.h1)`
  width: ${({ theme }) => theme.headerWidth || "auto"};
  font-size: 3.37rem;
  position: relative;
  color: ${({ theme }) => theme.headerColor || colors.black};
  font-weight: 700;
  @media (max-width: 380px) {
    width: auto;
  }
`;

export default Header;
