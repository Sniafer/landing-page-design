import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import CallToAction from "../components/CallToAction";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Subtext from "../components/Subtext";
import colors from "../utils/colors";

const Contact = () => {
  const [text, setText] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    setMail("");
    setName("");
  };

  const leftTheme = {
    subWidth: "auto",
  };

  const inputAnimation = {
    hide: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <Container>
      <Top>
        <ThemeProvider theme={leftTheme}>
          <LeftSide>
            <Header>Work with us</Header>
            <Subtext>
              Find our work fit you project? Send us your e-mail and we will
              contact you.
            </Subtext>
            <Subtext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et justo
              ornare tempor morbi lorem sit. Sed pharetra ornare egestas libero
              hac vel sit mi pellentesque. Cum nulla in ornare sagittis dolor
              mollis lorem. Dui cum faucibus id at faucibus nun.
            </Subtext>
          </LeftSide>
        </ThemeProvider>
        <RightSide>
          <Form
            variants={inputAnimation}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <Input
              onChange={({ target }) => setName(target.value)}
              type="text"
              value={name}
              placeholder="name"
            />
            <Input
              onChange={({ target }) => setMail(target.value)}
              type="email"
              value={mail}
              placeholder="e-mail"
            />
            <TextArea
              onChange={({ target }) => setText(target.value)}
              value={text}
              placeholder="message"
            />
            <CallToAction>Contact Us</CallToAction>
          </Form>
        </RightSide>
      </Top>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 9rem;
  margin-right: 9rem;
  margin-top: 7.5rem;
  margin-bottom: 5.57rem;
  @media (max-width: 1200px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.85rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  margin-right: auto;
  width: 100%;
`;

const RightSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 2rem;
  width: 100%;
  margin-top: 5rem;
  @media (max-width: 900px) {
    padding: 0;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 3.37rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background-color: ${colors.light};
  font-size: 1.68rem;
  color: ${colors.black};
  :focus {
    outline-color: ${colors.primary};
  }
  ::placeholder {
    color: #827785;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  background-color: ${colors.light};
  font-size: 1.68rem;
  color: ${colors.black};
  min-height: 10rem;
  :focus {
    outline-color: ${colors.primary};
  }
  ::placeholder {
    color: #827785;
  }
`;

export default Contact;
