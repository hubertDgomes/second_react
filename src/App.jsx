import "./App.css";
import Home from "./assets/components/pages/Home";
import Container from "./assets/components/Container";
import Header from "./assets/components/layouts/Header";
import Counter from "./assets/components/layouts/Counter";
import Services from "./assets/components/pages/Services";
import GFXDeg from "./assets/components/pages/GFXDeg";
import Works from "./assets/components/pages/Works";
import Testimony from "./assets/components/pages/Testimony";
import Contact from "./assets/components/pages/Contact";
import Footer from "./assets/components/layouts/Footer";
import { motion, useScroll } from "motion/react"
function App() {
  return (
    <>
    
    <Header/>
    <Home/>
    <Counter/>
    <Services/>
    <GFXDeg/>
    <Works/>
    <Testimony/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
