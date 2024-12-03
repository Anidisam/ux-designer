import React, { useState } from "react";
import "../assets/css/createAccount.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage("");
    alert("Account Created Successfully!");
    // Add your backend integration logic here
  };

  return (
    <div className="create-account-container">
      <h1>Create Account</h1>
      <form className="create-account-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <button type="submit" className="create-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;




















// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/createAccount.css"; 

// const CreateAccount = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); 

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     if (username && email && password) {

//       navigate("/home");
//     } else {
//       alert("Please fill in all fields!");
//     }
//   };

//   return (
//     <div className="create-account-container">
//       <h2>Create Account</h2>
//       <form onSubmit={handleCreateAccount}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
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
//         <button type="submit">Create Account</button>
//       </form>
//     </div>
//   );
// };

// export default CreateAccount;
