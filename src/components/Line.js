import styled from "styled-components";
import line from "../images/line.svg";
import colors from "../utils/colors";

const Line = () => {
  return <StyledLine src={line} />;
};

const StyledLine = styled.img`
  color: ${colors.gray};
  height: 20rem;
  width: 1.5rem;
  margin-right: 7rem;
`;

export default Line;
