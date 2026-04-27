export default function Header() {
  return (
    <header className="bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg sticky top-0">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            Employee Registration Portal
          </h1>
          <p className="text-sm opacity-90 mt-1">
            Manage employee records efficiently
          </p>
        </div>

        <nav>
          <ul className="flex items-center gap-6 font-medium">
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#employees" className="hover:text-yellow-300 transition">
                Employees
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
