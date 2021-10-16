import styled from "styled-components";
import colors from "../utils/colors";

const Subtext = ({ children }) => {
  return <StyledSubtext>{children}</StyledSubtext>;
};

const StyledSubtext = styled.p`
  font-size: ${({ theme }) => theme.subFont || "2.25rem"};
  color: ${({ theme }) => theme.subColor || colors.gray};
  width: ${({ theme }) => theme.subWidth || "auto"};
  margin-top: ${({ theme }) => theme.subTop || "3.8rem"};
  letter-spacing: 0.1rem;
  line-height: 50px;
`;

export default Subtext;
