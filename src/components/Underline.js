import styled from "styled-components";

const Underline = ({ image }) => {
  return <StyledUnderline src={image} />;
};

const StyledUnderline = styled.img`
  position: absolute;
  bottom: -2.5rem;
  left: 2rem;
  z-index: -1;
`;

export default Underline;
