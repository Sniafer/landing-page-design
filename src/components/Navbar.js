import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Logo from "./Logo";
import colors from "../utils/colors";
import NavButton from "./NavButton";
import navItems from "../utils/navItems";
import ContactButton from "./ContactButton";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState("");

  const theme = {
    logoColor: colors.primary,
    contactColor: colors.primary,
    contactBackground: colors.white,
    buttonColor: colors.black,
    background: colors.white,
  };

  const handleShow = () => {
    open === "open" ? setOpen("") : setOpen("open");
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
        <MobileNav>
          <Menu onClick={handleShow}>
            <Burger className={open} />
          </Menu>
        </MobileNav>
      </Nav>
      <MobileMenu open={open}>
        {navItems.map((item) => (
          <NavButton
            name={item.name}
            key={item.name}
            path={item.path}
            onClick={handleShow}
          />
        ))}
      </MobileMenu>
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
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: ${({ open }) => (open !== "" ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    margin-top: 2rem;
    width: 100%;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border: 0.2rem solid ${colors.primary};
`;

const Burger = styled.button`
  width: 32px;
  height: 4px;
  background: ${colors.primary};
  text-decoration: none;
  border: none;
  transition: all 0.5s ease-in-out;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 32px;
    height: 4px;
    background: ${colors.primary};
    transition: all 0.5s ease-in-out;
  }
  &:before {
    transform: translateX(-16px) translateY(-12px);
  }
  &:after {
    transform: translateX(-16px) translateY(8px);
  }
`;

export default Navbar;
