import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./utils/GlobalStyles";
import MeetUs from "./components/MeetUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <MeetUs />
      <Footer />
    </>
  );
}

export default App;
