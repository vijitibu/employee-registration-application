import { useState } from "react";
import { Employee } from "../types/Employee";
import EmployeeForm from "../components/Employee/EmployeeForm";
import EmployeeTable from "../components/Employee/EmployeeTable";

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editData, setEditData] = useState<Employee | null>(null);

  const handleSave = (form: Employee) => {
    if (editData) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editData.id ? { ...form, id: emp.id } : emp,
        ),
      );
      setEditData(null);
    } else {
      setEmployees((prev) => [...prev, { ...form, id: Date.now() }]);
    }
  };

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div
      className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8
      py-8 items-start"
    >
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-purple-100">
        <EmployeeForm
          key={editData?.id ?? "new"}
          onSave={handleSave}
          editData={editData}
        />
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-purple-100 overflow-hidden">
        <EmployeeTable
          employees={employees}
          onEdit={setEditData}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
