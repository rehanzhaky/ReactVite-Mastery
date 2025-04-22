import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Props from "./components/Props";
import DestructuringProps from "./components/DestructuringProps";
import ImmutabilityOfProps from "./components/ImmutabilityOfProps";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Apa itu Props */}
      <Props name="Raihan" message="Kiw, im " />
      {/* Merubah cara menulis props dengan lebih simple */}
      <DestructuringProps age="23" job="Software Engineer" />
      {/* Props bersifat immutable, tidak dapat di reassigned */}
      <ImmutabilityOfProps learn="React" with="codestoic" />
    </>
  );
};

export default App;
