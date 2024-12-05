import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prototyping from "./components/Prototyping";
import Teaching from "./components/Teaching";
import Idea from "./components/Idea";
import Friends from "./components/Friends";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";
import About from "./components/About"; 
import Pricing from "./components/Pricing";
import Authentication from "./components/Authentication";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
// import CreateAccount from "./components/CreateAccount";
import ArticleDetail from "./components/ArticleDetail";
import Blog from "./components/Blog";

function Home() {
  return (
    <>
      <Hero />
      <Prototyping />
      <Teaching />
      <Idea />
      <Friends />
      <LatestArticles />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/create-account" element={<CreateAccount />} /> */}
        <Route path="/article-detail/:id" element={<ArticleDetail />} />{" "}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;










































// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Prototyping from "./components/Prototyping";
// import Teaching from "./components/Teaching";
// import Idea from "./components/Idea";
// import Friends from "./components/Friends";
// import Article from "./components/Article";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import Pricing from "./components/Pricing";
// import Authentication from "./components/Authentication";
// import Signin from "./components/Signin";
// import SignUp from "./components/SignUp";
// import CreateAccount from "./components/CreateAccount";

// function Home() {
//   return (
//     <>
//       <Hero />
//       <Prototyping />
//       <Teaching />
//       <Idea />
//       <Friends />
//       <Article />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Redirect root URL (/) to /auth */}
//         <Route path="/" element={<Navigate to="/auth" />} />

//         {/* Authentication page route */}
//         <Route path="/auth" element={<Authentication />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/create-account" element={<CreateAccount />} />

//         {/* Other pages */}
//         <Route path="/about" element={<About />} />
//         <Route path="/pricing" element={<Pricing />} />

//         {/* Home page route */}
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
