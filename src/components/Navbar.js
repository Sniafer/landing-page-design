import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Logo from "./Logo";
import colors from "../utils/colors";
import NavButton from "./NavButton";
import navItems from "../utils/navItems";
import ContactButton from "./ContactButton";

const Navbar = () => {
  const theme = {
    logoColor: colors.primary,
    contactColor: colors.primary,
    contactBackground: colors.white,
    buttonColor: colors.black,
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <Logo text="CompanyLogo" />
        {navItems.map((item) => (
          <NavButton name={item.name} />
        ))}
        <ContactButton text="Get in touch" />
      </Nav>
    </ThemeProvider>
  );
};

const Nav = styled.div`
  height: 3.69rem;
  margin-top: 2rem;
  margin-left: 12rem;
  margin-right: 12rem;
  display: flex;
  align-items: center;
`;

export default Navbar;
