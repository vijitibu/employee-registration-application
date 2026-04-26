export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        About This App
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed text-center">
        This Employee Management Dashboard is built using{" "}
        <span className="font-semibold text-purple-600">
          React, TypeScript, Vite, and Tailwind CSS
        </span>
        .
      </p>

      {/* Features Section */}
      <div className="bg-gray-50 rounded-xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Key Features
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>✅ Add employees easily</li>
          <li>✏️ Edit employee details</li>
          <li>🗑️ Delete employees</li>
          <li>📊 View data in a clean table</li>
        </ul>
      </div>

      {/* Footer */}
      <p className="text-lg text-gray-600 leading-8">
        This Employee Portal helps manage employee records with modern tools.
      </p>
    </div>
  );
}
