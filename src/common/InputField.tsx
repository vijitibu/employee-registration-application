// components/common/InputField.tsx
// Reusable Input Component
import type { ChangeEvent } from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: Props) {
  return (
    <div className="w-full flex flex-col mb-4">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>

      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full h-10 px-3 rounded-md border text-sm
        ${error ? "border-red-500" : "border-gray-300"}
        focus:outline-none focus:ring-2 focus:ring-purple-500`}
      />

      {/* Error BELOW input */}
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
}
