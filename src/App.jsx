import { useEffect } from "react";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import Articles from "./components/Articles";
import HeroImage from "./components/HeroImage";
import Contact from "./components/Contact";
import "./styles/normalize.css";
import "./styles/app.css";
function App() {
  return (
    <div className="App">
      <HeroImage />
      <Articles />
      <Contact />
    </div>
  );
}

export default App;
