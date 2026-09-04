import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import InstagramBanner from "./components/instagramBanner/InstagramBanner";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Offer from "./components/offer/Offer";
import Projects from "./components/projects/Projects";

Navbar;
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Offer />
      <About />
      <Projects />
      <InstagramBanner />
      <Footer />
    </>
  );
}

export default App;
