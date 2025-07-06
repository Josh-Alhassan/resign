import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <h1>HELOOOOOO</h1>
    </div>
  );
}

export default App;
