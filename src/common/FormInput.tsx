type Props = {
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  error?: string;
};

export default function FormInput({
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  min,
  max,
  error,
}: Props) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
