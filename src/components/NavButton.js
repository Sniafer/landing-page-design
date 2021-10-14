import styled from "styled-components";

const NavButton = ({ name }) => {
  return <Button>{name}</Button>;
};

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: none;
  border: none;
  background: none;
  margin-right: 4rem;
  color: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
`;

export default NavButton;
