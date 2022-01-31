import React, { useEffect } from "react";
import EasySteps from "./components/EasySteps";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import Services from "./components/Services";
export default function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <EasySteps></EasySteps>
      <Footer />
    </div>
  );
}
