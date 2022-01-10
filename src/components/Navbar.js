import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import colors from "../utils/colors";
import NavButton from "./NavButton";
import navItems from "../utils/navItems";
import ContactButton from "./ContactButton";
import MobileButton from "./MobileButton";
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

  const menuAnimation = {
    hide: {
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    show: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleShow = () => {
    setOpen(!open);
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
          <Hamburger onClick={handleShow}>
            <Line
              color={open ? colors.white : colors.primary}
              width={open ? "40px" : ""}
              transformtop={
                open ? "rotate(45deg) translateY(5px) translateX(5px)" : ""
              }
              transformbottom={
                open ? "rotate(-45deg) translateY(-13px) translateX(13px)" : ""
              }
            />
          </Hamburger>
          <AnimatePresence>
            {open && (
              <NavContainer
                variants={menuAnimation}
                initial="hide"
                animate="show"
                exit="hide"
              >
                {navItems.map((item) => (
                  <MobileButton
                    name={item.name}
                    key={item.name}
                    path={item.path}
                    onClick={handleShow}
                  />
                ))}
                <ContactButton text="Get in touch" />
              </NavContainer>
            )}
          </AnimatePresence>
        </MobileNav>
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
  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;

const Hamburger = styled(motion.button)`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  z-index: 30;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Line = styled(motion.div)`
  height: 5px;
  width: 30px;
  margin-bottom: 13px;
  background-color: ${colors.primary};
  transition: all 0.3s ease-out;
  position: relative;

  ::before {
    content: "";
    height: 5px;
    width: ${(props) => props.width || "40px"};
    background-color: ${(props) => props.color || colors.primary};
    position: absolute;
    top: -13px;
    right: 0;
    transition: all 0.3s ease-out;
    transform: ${(props) => props.transformtop || ""};
  }

  ::after {
    content: "";
    height: 5px;
    width: ${(props) => props.width || "20px"};
    background-color: ${(props) => props.color || colors.primary};
    position: absolute;
    top: 13px;
    right: 0;
    transition: all 0.3s ease-out;
    transform: ${(props) => props.transformbottom || ""};
  }
`;

const NavContainer = styled(motion.div)`
  width: 16rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  z-index: 10;
  top: 0;
  right: 0;
  height: 100%;
  transform: translateX(100%);
  filter: drop-shadow(-1px 0px 4px rgba(6, 52, 63, 0.35));
`;

export default Navbar;
