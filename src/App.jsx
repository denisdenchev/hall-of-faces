import React, { useState } from "react";
import Face from "./components/Face";
import "./App.css";
import Shea from "./assets/Shea.png";

function App() {
  const [degree, rotateEyes] = useState(0);
  return (
    <section>
      <Face img={Shea} imageText="Shea" />
    </section>
  );
}

export default App;
