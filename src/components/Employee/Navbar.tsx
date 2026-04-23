import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `px-4 py-2 ${
      pathname === path
        ? "border-b-2 border-purple-600 font-bold"
        : "text-gray-500"
    }`;

  return (
    <div className="flex gap-6 border-b mb-6">
      <Link to="/" className={linkClass("/")}>
        Home
      </Link>
      <Link to="/about" className={linkClass("/about")}>
        About
      </Link>
      <Link to="/contact" className={linkClass("/contact")}>
        Contact
      </Link>
    </div>
  );
}
