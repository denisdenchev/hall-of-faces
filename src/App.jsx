import React, { useState } from "react";
import Face from "./components/Face";
import "./App.css";
import Shea from "./assets/Shea.png";
import ButtonAndInputField from "./components/ButtonAndInputField/ButtonAndInputField";
import InputField from "./components/InputField";
import Eyes from "./components/Eyes";

function App() {
  const [degree, rotateEyes] = useState(0);
  return (
    <section>
      {/* <Eyes /> */}
      <Face img={Shea} />
      {/* <InputField /> */}
      {/* <ButtonAndInputField */}
    </section>
  );
}

export default App;
