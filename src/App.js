import { Fragment } from "react";
import Cta from "./components/Cta/Cta";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Header/Hero";
import NavBar from "./components/Header/NavBar";
import Shorten from "./components/Shorten/Shorten";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Shorten />
      <Stats />
      <Feature />
      <Cta />
      <Footer />
    </Fragment>
  );
}

export default App;
