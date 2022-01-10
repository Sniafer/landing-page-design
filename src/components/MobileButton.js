import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import colors from "../utils/colors";

const NavButton = ({ name, path, onClick }) => {
  return (
    <StyledLink to={path}>
      <Button onClick={onClick}>{name}</Button>
    </StyledLink>
  );
};

const Button = styled(motion.button)`
  font-size: 1.5rem;
  padding: 0.5rem;
  font-weight: 400;
  text-decoration: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
  @media (max-width: 600px) {
    color: ${colors.white};
  }
`;
const StyledLink = styled(Link)`
  margin-right: 3rem;
  text-decoration: none;
  @media (max-width: 600px) {
    padding: 1rem;
    margin-right: 0;
  }
`;

export default NavButton;
