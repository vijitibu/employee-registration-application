import { useEffect, useState, useCallback } from "react";
import { getEmployees } from "../services/employeeService";
import { Employee } from "../types/Employee";

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = useCallback(async () => {
    const data = await getEmployees();
    setEmployees(data);
  }, []);

  useEffect(() => {
    const load = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    load();
  }, []);

  return { employees, setEmployees, fetchEmployees };
}
