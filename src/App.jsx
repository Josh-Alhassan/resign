import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <h1>HELOOOOOO</h1>
    </div>
  );
}

export default App;
