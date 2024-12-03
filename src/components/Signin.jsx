import React from "react";
import "../assets/css/signin.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="signin-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
 






























// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // useNavigate hook

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Example validation - replace with your authentication logic
//     if (email && password) {
//       // Redirect to Home page after successful sign-in
//       navigate("/home");
//     } else {
//       alert("Please enter valid credentials!");
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default Signin;
