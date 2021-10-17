import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Logo from "./Logo";
import colors from "../utils/colors";
import NavButton from "./NavButton";
import navItems from "../utils/navItems";
import ContactButton from "./ContactButton";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState("none");

  const theme = {
    logoColor: colors.primary,
    contactColor: colors.primary,
    contactBackground: colors.white,
    buttonColor: colors.black,
    background: colors.white,
  };

  const handleShow = () => {
    show === "flex" ? setShow("none") : setShow("flex");
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <Logo text="CompanyLogo" />
        <ButtonContainer>
          {navItems.map((item) => (
            <NavButton name={item.name} key={item.name} path={item.path} />
          ))}
          <ContactButton text="Get in touch" />
        </ButtonContainer>
      </Nav>
    </ThemeProvider>
  );
};

const Nav = styled.div`
  margin-left: 9rem;
  margin-right: 9rem;
  height: 2.76rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export default Navbar;
