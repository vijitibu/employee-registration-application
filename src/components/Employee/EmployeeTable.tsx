import { Employee } from "../../types/Employee";

type Props = {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
};

export default function EmployeeTable({ employees, onEdit, onDelete }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-700">
        Employee Records
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Department</th>
              <th className="p-4">Salary</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">
                  No employees added yet
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-b hover:bg-purple-50 transition"
                >
                  <td className="p-4">{emp.name}</td>
                  <td className="p-4">{emp.department}</td>
                  <td className="p-4">₹ {emp.salary}</td>
                  <td className="p-4 flex gap-3">
                    <button
                      onClick={() => onEdit(emp)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(emp.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
