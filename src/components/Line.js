import styled from "styled-components";
import line from "../images/line.svg";
import colors from "../utils/colors";

const Line = () => {
  return <StyledLine src={line} />;
};

const StyledLine = styled.img`
  color: ${colors.gray};
  height: ${({ height }) => height || "20rem"};
  width: 1.5rem;
  margin-right: 7rem;
  margin-left: 2rem;
  @media (max-width: 1400px) {
    margin-right: 8rem;
    margin-left: 2rem;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export default Line;
