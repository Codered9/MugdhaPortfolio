import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import PurchaseOrder from "./components/PurchaseOrder.jsx";
import TestProject from "./components/TestProject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/PurchaseOrder" element={<PurchaseOrder />} />
        <Route path="/projects/TestProject" element={<TestProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
