import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactButton = ({ text }) => {
  return (
    <StyledLink to="/contact">
      <Button>{text}</Button>
    </StyledLink>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.contactBackground};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.contactColor};
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.contactBackground};
    background-color: ${({ theme }) => theme.contactColor};
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  text-decoration: none;
`;

export default ContactButton;
