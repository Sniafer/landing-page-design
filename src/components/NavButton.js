import styled from "styled-components";
import { Link } from "react-router-dom";

const NavButton = ({ name, path, onClick }) => {
  return (
    <StyledLink to={path}>
      <Button onClick={onClick}>{name}</Button>
    </StyledLink>
  );
};

const Button = styled.button`
  font-size: 1.12rem;
  font-weight: 400;
  text-decoration: none;
  border: none;
  background: none;
  color: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  margin-right: 3rem;
  text-decoration: none;
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export default NavButton;
