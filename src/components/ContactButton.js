import styled from "styled-components";

const ContactButton = ({ text }) => {
  return <Button>{text}</Button>;
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
  margin-left: auto;
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

export default ContactButton;
