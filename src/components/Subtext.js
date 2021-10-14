import styled from "styled-components";

const Subtext = ({ children, theme }) => {
  return <StyledSubtext theme={theme}>{children}</StyledSubtext>;
};

const StyledSubtext = styled.p`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.underline};
  width: ${({ theme }) => theme.subWidth || "auto"};
  margin-top: 3.8rem;
  letter-spacing: 0.1rem;
`;

export default Subtext;
