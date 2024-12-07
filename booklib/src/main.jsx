import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero"
import Items from "./components/Items";
import BookDetails from "./components/BookDetails";
import About from "./components/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
    <Items />
    <BookDetails />
    <About />
  </StrictMode>
);
