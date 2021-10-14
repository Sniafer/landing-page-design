import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = ({ text }) => {
  return <StyledLogo to="/">{text}</StyledLogo>;
};

const StyledLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.88rem;
  margin-right: 7.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.logoColor};
  cursor: pointer;
`;

export default Logo;
