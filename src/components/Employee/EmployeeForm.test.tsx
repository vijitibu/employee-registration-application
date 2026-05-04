import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import EmployeeForm from "./EmployeeForm";
import toast from "react-hot-toast";

// ✅ Mock toast (Vitest way)
vi.mock("react-hot-toast", () => ({
  default: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

describe("EmployeeForm", () => {
  const mockSave = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders form fields", () => {
    render(<EmployeeForm onSave={mockSave} />);

    expect(
      screen.getByPlaceholderText("Enter employee name"),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter department")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter salary")).toBeInTheDocument();
  });

  test("shows error if name is empty", () => {
    render(<EmployeeForm onSave={mockSave} />);

    fireEvent.click(screen.getByRole("button"));

    expect(toast.error).toHaveBeenCalledWith("Name is required");
  });

  test("valid form submission", () => {
    render(<EmployeeForm onSave={mockSave} />);

    fireEvent.change(screen.getByPlaceholderText("Enter employee name"), {
      target: { value: "Viji" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "viji@test.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter department"), {
      target: { value: "IT" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter salary"), {
      target: { value: "50000" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(mockSave).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalled();
  });

  test("invalid email shows error", () => {
    render(<EmployeeForm onSave={mockSave} />);

    fireEvent.change(screen.getByPlaceholderText("Enter employee name"), {
      target: { value: "Viji" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "invalid-email" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter department"), {
      target: { value: "IT" },
    });

    fireEvent.change(screen.getByPlaceholderText("Enter salary"), {
      target: { value: "50000" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(toast.error).toHaveBeenCalledWith("Enter valid email");
  });
});
