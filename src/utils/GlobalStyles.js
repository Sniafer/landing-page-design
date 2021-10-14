import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
 };
 html {
     font-size: 16px;
     @media (max-width: 1440px) {
         font-size: 12px;
     }
 }
 body {
     font-family: "Roboto"
 };
`;

export default GlobalStyles;
