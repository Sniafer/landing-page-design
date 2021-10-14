import styled from "styled-components";

const Logo = ({ text }) => {
  return <StyledLogo>{text}</StyledLogo>;
};

const StyledLogo = styled.p`
  font-size: 1.88rem;
  margin-right: 7.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.logoColor};
  cursor: pointer;
`;

export default Logo;
