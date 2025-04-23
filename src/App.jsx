import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Props from "./belajar/Props";
import DestructuringProps from "./belajar/DestructuringProps";
import ImmutabilityOfProps from "./belajar/ImmutabilityOfProps";
import PassingArray from "./belajar/PassingArray";

const App = () => {
  // List of Arrays
  const seatNumber = [1, 2, 3];
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
      {/* Mencoba untuk Passing Array */}
      <PassingArray busName="Jaya Abadi Bus" seatNumber={seatNumber}/>
    </>
  );
};

export default App;
