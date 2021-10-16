import styled from "styled-components";
import colors from "../utils/colors";

const ImageCard = ({ image, magnifying, classname }) => {
  return (
    <ImageContainer className={classname}>
      <Magnifying src={magnifying} />
      <Image src={image} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  background-color: ${colors.primary};
  height: 19.5rem;
  position: relative;
  margin-right: 2rem;
`;

const Image = styled.img`
  height: 19.5rem;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;
  width: 100%;
  object-fit: cover;
  &:hover {
    opacity: 40%;
  }
`;

const Magnifying = styled.img`
  position: absolute;
  top: 30%;
  left: 40%;
  display: none;
  transition: display 300ms ease-in-out;
  ${ImageContainer}:hover & {
    display: block;
  }
`;

export default ImageCard;
