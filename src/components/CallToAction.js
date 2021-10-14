import styled from "styled-components";

const CallToAction = ({ children, theme }) => {
  return <Button theme={theme}>{children}</Button>;
};

export default CallToAction;

const Button = styled.button`
  width: 22rem;
  height: 6.5rem;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.buttonColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 50px;
  margin-top: 3.8rem;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;
