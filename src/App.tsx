import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Employee/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Employees from "./Pages/Employees";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 20,
          right: 20,
          zIndex: 99999,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
          },
        }}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
