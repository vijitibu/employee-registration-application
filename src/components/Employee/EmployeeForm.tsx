import { useState } from "react";
import FormInput from "./FormInput";
import { Employee } from "../../types/Employee";
import toast from "react-hot-toast";

type Props = {
  onSave: (data: Employee) => void;
  editData?: Employee | null;
};

export default function EmployeeForm({ onSave, editData }: Props) {
  const [form, setForm] = useState<Employee>({
    name: "",
    email: "",
    department: "",
    salary: 0,
  });

  // ✅ Sync without useEffect
  if (editData && form.id !== editData.id) {
    setForm(editData);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "salary" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = editData ? form : { ...form, id: Date.now() };

    onSave(data);
    toast.success(editData ? "Updated!" : "Added!");

    setForm({
      name: "",
      email: "",
      department: "",
      salary: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
      <FormInput
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange}
      />
      <FormInput
        name="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
      />
      <FormInput
        name="department"
        label="Department"
        value={form.department}
        onChange={handleChange}
      />
      <FormInput
        name="salary"
        type="number"
        label="Salary"
        value={form.salary}
        onChange={handleChange}
      />

      <button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded">
        {editData ? "Update" : "Add"}
      </button>
    </form>
  );
}
