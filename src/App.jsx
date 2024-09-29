import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prototyping from "./components/Prototyping";
import Teaching from "./components/Teaching";
import Idea from "./components/Idea";
import Friends from "./components/Friends";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Prototyping />
      <Teaching />
      <Idea />
      <Friends />
      <Article />
      <Footer />
    </>
  );
}

export default App;
