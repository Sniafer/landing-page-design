import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CallToAction from "../components/CallToAction";
import Header from "../components/Header";
import Line from "../components/Line";
import Subtext from "../components/Subtext";
import colors from "../utils/colors";

const Contact = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  const handleChange = (e) => {
    setText(e.value);
  };

  const leftTheme = {
    subWidth: "23.25rem",
  };
  const rightTheme = {
    subWidth: "50rem",
    subTop: "0rem",
  };

  return (
    <Container>
      <Top>
        <ThemeProvider theme={leftTheme}>
          <LeftSide>
            <Header>Work with us</Header>
            <Subtext>
              Find our work fit you project? Send us you e-mail and we will
              contact you
            </Subtext>
          </LeftSide>
        </ThemeProvider>
        <ThemeProvider theme={rightTheme}>
          <RightSide>
            <Line />
            <Subtext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et justo
              ornare tempor morbi lorem sit. Sed pharetra ornare egestas libero
              hac vel sit mi pellentesque. Cum nulla in ornare sagittis dolor
              mollis lorem. Dui cum faucibus id at faucibus nun.
            </Subtext>
          </RightSide>
        </ThemeProvider>
      </Top>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={text} />
        <CallToAction>Contact Us</CallToAction>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 9rem;
  margin-right: 9rem;
  margin-top: 7.5rem;
  margin-bottom: 5.57rem;
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 2.85rem;
`;

const LeftSide = styled.div`
  margin-right: auto;
`;

const RightSide = styled.aside`
  position: relative;
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 24rem;
  height: 3.37rem;
  border: none;
  background-color: ${colors.light};
  font-size: 1.68rem;
`;

export default Contact;
