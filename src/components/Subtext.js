import styled from "styled-components";

const Subtext = ({ children, theme }) => {
  return <StyledSubtext theme={theme}>{children}</StyledSubtext>;
};

const StyledSubtext = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.underline};
  width: 23rem;
  margin-top: 3.8rem;
`;

export default Subtext;
