import { useEffect } from "react";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import Articles from "./components/Articles";
import HeroImage from "./components/HeroImage";
import "./styles/normalize.css";
import "./styles/app.css";
function App() {
  return (
    <div className="App">
      <HeroImage />
      <Articles />
    </div>
  );
}

export default App;
