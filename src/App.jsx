import "./App.css";
import Home from "./assets/components/pages/Home";
import Container from "./assets/components/Container";
import Header from "./assets/components/layouts/Header";
import Counter from "./assets/components/layouts/Counter";
import Services from "./assets/components/pages/Services";
import GFXDeg from "./assets/components/pages/GFXDeg";


function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Counter/>
    <Services/>
    <GFXDeg/>
    </>
  );
}

export default App;
