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
// import SignUp from "./components/SignUp";
// import CreateAccount from "./components/CreateAccount";
import ArticleDetail from "./components/ArticleDetail";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ToolsAndResources from "./components/ToolsAndResources";
import Contact from "./components/Contact";
import SignForm from "./components/SignForm";
import FreeAccess from "./components/FreeAccess";
import CheckoutPage from "./components/CheckoutPage";
import Confirmation from "./components/Confirmation";
import Invoice from "./components/Invoice";


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
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/create-account" element={<CreateAccount />} /> */}
        <Route path="/article-detail/:id" element={<ArticleDetail />} />{" "}
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/resources" element={<ToolsAndResources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignForm />} />
        <Route path="/freeaccess" element={<FreeAccess />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/invoice" element={<Invoice />} />
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