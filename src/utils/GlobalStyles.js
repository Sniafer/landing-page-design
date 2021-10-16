import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
 };
 body {
     font-family: "Roboto";
     /* margin-left: 12rem;
     margin-right: 12rem; */
 };
 .big {
     flex: 1.2;
 }
 .medium {
     flex: 1;
 }
 .small {
     flex: 0.8;
 }
`;

export default GlobalStyles;
