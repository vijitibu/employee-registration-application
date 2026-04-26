import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 border rounded mb-3"
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-2 border rounded mb-3"
            />

            <button className="bg-purple-600 text-white px-4 py-2 rounded w-full hover:bg-purple-700">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
