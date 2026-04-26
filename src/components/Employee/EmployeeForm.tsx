import { useState } from "react";

import { Employee } from "../../types/Employee";
import toast from "react-hot-toast";
import FormInput from "../../common/FormInput";

type Props = {
  onSave: (data: Employee) => void;
  editData?: Employee | null;
};

const emptyForm: Employee = {
  id: 0,
  name: "",
  email: "",
  department: "",
  salary: 0,
};

export default function EmployeeForm({ onSave, editData }: Props) {
  // key prop in parent will remount form when editData changes
  const [form, setForm] = useState<Employee>(editData ?? emptyForm);

  // using key prop in parent avoids useEffect sync warning

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "salary") {
      // max 6 digits
      if (value.length > 6) return;

      // prevent negative
      if (value !== "" && Number(value) < 0) return;

      setForm({
        ...form,
        salary: value === "" ? 0 : Number(value),
      });
      return;
    }

    // Name field restrict numbers/special chars while typing
    if (name === "name") {
      if (!/^[A-Za-z ]*$/.test(value)) return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Name allows only letters/spaces while typing

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validations
    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

    // Only letters and spaces allowed
    const nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(form.name.trim())) {
      toast.error("Name should contain letters only");
      return;
    }

    if (form.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }

    if (form.name.trim().length > 30) {
      toast.error("Name cannot exceed 30 characters");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(form.email)) {
      toast.error("Enter valid email");
      return;
    }

    if (!form.department.trim()) {
      toast.error("Department is required");
      return;
    }

    if (form.salary <= 0) {
      toast.error("Enter valid salary");
      return;
    }

    if (form.salary > 999999) {
      toast.error("Salary cannot exceed 6 digits");
      return;
    }

    const data = editData
      ? { ...form, id: editData.id }
      : {
          ...form,
          id: Date.now(),
        };

    onSave(data);

    toast.success(editData ? "Updated!" : "Added!");

    setForm(emptyForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-6 text-purple-700">
        {editData ? "Update Employee" : "Employee Registration"}
      </h2>

      <FormInput
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter employee name"
      />

      <FormInput
        name="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <FormInput
        name="department"
        label="Department"
        value={form.department}
        onChange={handleChange}
        placeholder="Enter department"
      />

      <FormInput
        name="salary"
        type="number"
        label="Salary"
        value={form.salary === 0 ? "" : form.salary}
        onChange={handleChange}
        min={0}
        max={999999}
        placeholder="Enter salary"
      />

      <button
        type="submit"
        className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition"
      >
        {editData ? "Update" : "Add Employee"}
      </button>
    </form>
  );
}
