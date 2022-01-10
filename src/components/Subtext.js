import styled from "styled-components";
import colors from "../utils/colors";
import { motion } from "framer-motion";

const Subtext = ({ children, left }) => {
  const subtextAnimation = {
    hide: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.7,
      },
    },
  };

  return (
    <StyledSubtext
      variants={subtextAnimation}
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      left={left}
    >
      {children}
    </StyledSubtext>
  );
};

const StyledSubtext = styled(motion.p)`
  font-size: ${({ theme }) => theme.subFont || "1.68rem"};
  color: ${({ theme }) => theme.subColor || colors.gray};
  width: ${({ theme }) => theme.subWidth || "auto"};
  margin-top: ${({ theme }) => theme.subTop || "2.85rem"};
  letter-spacing: 0.1rem;
  line-height: 50px;
  @media (max-width: 1400px) {
    width: ${({ left }) => (left ? "" : "auto")};
    margin-right: ${({ left }) => (left ? "1rem" : "0")};
  }
  @media (max-width: 900px) {
    margin-right: 0;
    width: auto;
    margin-top: 2.85rem;
  }
`;

export default Subtext;
