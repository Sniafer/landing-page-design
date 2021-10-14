import styled from "styled-components";

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.h1`
  width: ${({ theme }) => theme.headerWidth || "auto"};
  font-size: 4.5rem;
  position: relative;
  color: ${({ theme }) => theme.headerColor};
  font-weight: 700;
`;

export default Header;
