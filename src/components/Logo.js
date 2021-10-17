import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = ({ text }) => {
  return <StyledLogo to="/">{text}</StyledLogo>;
};

const StyledLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.41rem;
  margin-right: 5.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.logoColor};
  cursor: pointer;
`;

export default Logo;
