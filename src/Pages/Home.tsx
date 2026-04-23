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
    <div className="grid md:grid-cols-2 gap-6">
      <EmployeeForm onSave={handleSave} editData={editData} />

      <EmployeeTable
        data={employees}
        onEdit={setEditData}
        onDelete={handleDelete}
      />
    </div>
  );
}
