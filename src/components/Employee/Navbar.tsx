import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-purple-700 font-semibold border-b-2 border-purple-600 pb-1"
      : "text-gray-600 hover:text-purple-600";

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-purple-700">
          Employee Portal
        </h1>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/employees" className={linkClass("/employees")}>
            Employees
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 shadow-md">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>

          <Link
            to="/employees"
            onClick={() => setOpen(false)}
            className="block"
          >
            Employees
          </Link>

          <Link to="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)} className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
