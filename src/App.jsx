import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prototyping from "./components/Prototyping";
import Teaching from "./components/Teaching";
import Idea from "./components/Idea";
import Friends from "./components/Friends";
import Article from "./components/Article";
import Footer from "./components/Footer";
import About from "./components/About"; // Your About component

function Home() {
  return (
    <>
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
      </Routes>
    </Router>
  );
}

export default App;
