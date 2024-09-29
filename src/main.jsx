import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import './index.css'; // Custom styles if any

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
