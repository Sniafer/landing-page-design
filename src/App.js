import { ThemeProvider } from "styled-components";
import GlobalStyles from "./utils/GlobalStyles";
import Logo from "./components/Logo";
import colors from "./utils/colors";

function App() {
  const theme = {
    color: colors.primary,
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Logo text="CompanyLogo" />
      </ThemeProvider>
    </>
  );
}

export default App;
