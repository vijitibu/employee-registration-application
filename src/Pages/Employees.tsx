import { Employee } from "../types/Employee";

const employees: Employee[] = [
  {
    id: 1,
    name: "Viji Prabha",
    email: "viji@email.com",
    department: "IT",
    salary: 75000,
  },
  {
    id: 2,
    name: "Anu Joseph",
    email: "anu@email.com",
    department: "HR",
    salary: 65000,
  },
  {
    id: 3,
    name: "Rahul Das",
    email: "rahul@email.com",
    department: "Finance",
    salary: 82000,
  },
];

export default function Employees() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-purple-700 mb-10">
        Employee Directory
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
          >
            <div className="w-24 h-24 rounded-full bg-purple-600 text-white text-3xl font-bold flex items-center justify-center mx-auto mb-6">
              {emp.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <h2 className="text-2xl font-semibold text-center">{emp.name}</h2>

            <p className="text-center text-purple-600 mb-6">{emp.department}</p>

            <p className="mb-2">
              <strong>Email:</strong> {emp.email}
            </p>

            <p className="mb-4">
              <strong>Salary:</strong> ₹ {emp.salary}
            </p>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl">
                Edit
              </button>

              <button className="flex-1 bg-red-500 text-white py-2 rounded-xl">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
