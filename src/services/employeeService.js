const STORAGE_KEY = "employees";
// Get all employees
export const getEmployees = async () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};
// Add employee
export const addEmployee = async (emp) => {
    const employees = await getEmployees();
    const newEmployee = {
        ...emp,
        id: Date.now(), // unique id
    };
    const updated = [...employees, newEmployee];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
// Update employee
export const updateEmployee = async (id, updatedEmp) => {
    const employees = await getEmployees();
    const updated = employees.map((emp) => emp.id === id ? { ...updatedEmp, id } : emp);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
// Delete employee
export const deleteEmployee = async (id) => {
    const employees = await getEmployees();
    const updated = employees.filter((emp) => emp.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
