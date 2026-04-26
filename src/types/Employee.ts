export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
}

export interface EmployeeErrors {
  name?: string;
  email?: string;
  department?: string;
  salary?: string;
}
