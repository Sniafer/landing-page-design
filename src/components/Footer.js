import styled from "styled-components";
import colors from "../utils/colors";

const Footer = () => {
  const theme = {
    textColor: colors.primary,
  };
  return (
    <StyledFooter>
      <Text theme={theme}>Wiktor Maszota ©2021 All rights reserved.</Text>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 3.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-size: 1.12rem;
  color: ${({ theme }) => theme.textColor};
`;

export default Footer;
