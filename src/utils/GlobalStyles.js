import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
 };
 body {
     font-family: "Roboto";
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
 .show {
     display: block;
 }

 .open {
  transform: translateX(-50px);
  background: transparent;
 }
 .open:before {
    transform: rotate(45deg) translate(24px, -24px);
 }
 
 .open:after {
    transform: rotate(-45deg) translate(24px, 24px);
 }
`;

export default GlobalStyles;
