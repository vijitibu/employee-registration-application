import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Employee/Navbar";

import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">
            Employee Management Dashboard
          </h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}
