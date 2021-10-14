import styled from "styled-components";
import { Link } from "react-router-dom";

const NavButton = ({ name, path }) => {
  return (
    <StyledLink to={path}>
      <Button>{name}</Button>
    </StyledLink>
  );
};

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  margin-right: 4rem;
  text-decoration: none;
`;

export default NavButton;
