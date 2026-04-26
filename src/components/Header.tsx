import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Portal</h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-yellow-300">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-300">
            About
          </a>
          <a href="#employees" className="hover:text-yellow-300">
            Employees
          </a>
          <a href="#contact" className="hover:text-yellow-300">
            Contact
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-indigo-700">
          <a href="#" className="block">
            Home
          </a>
          <a href="#about" className="block">
            About
          </a>
          <a href="#employees" className="block">
            Employees
          </a>
          <a href="#contact" className="block">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
