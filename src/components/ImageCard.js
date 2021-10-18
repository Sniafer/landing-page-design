import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";

const ImageCard = ({ image, magnifying, classname, id }) => {
  return (
    <ImageContainer className={classname} to={`work/${id}`}>
      <Magnifying src={magnifying} />
      <Image src={image} />
    </ImageContainer>
  );
};

const ImageContainer = styled(Link)`
  background-color: ${colors.primary};
  height: 17rem;
  position: relative;
  margin-right: 1.5rem;
  @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  height: 17rem;
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
