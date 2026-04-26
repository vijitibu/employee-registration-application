import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-700">Employee Portal</h1>

        <div className="flex gap-3">
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
      </div>
    </nav>
  );
}
