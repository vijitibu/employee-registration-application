import { Employee } from "../../types/Employee";

type Props = {
  data: Employee[];
  onEdit: (emp: Employee) => void;
  onDelete: (id: number) => void;
};

export default function EmployeeTable({ data, onEdit, onDelete }: Props) {
  // If no data → show empty UI
  if (data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
        <p className="text-lg">No employees added yet</p>
        <p className="text-sm mt-2">Add your first employee 🚀</p>
      </div>
    );
  }

  //  Show table only when data exists
  return (
    <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((emp) => (
            <tr key={emp.id} className="border-t text-center hover:bg-gray-50">
              <td className="p-2">{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>

              <td className="space-x-2">
                <button
                  onClick={() => onEdit(emp)}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(emp.id!)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
