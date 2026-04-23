// components/common/SearchBar.tsx
// Reusable Search Component
interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search employee..."
      className="w-full px-4 py-2 rounded-lg border border-gray-300 
      focus:ring-2 focus:ring-purple-500 outline-none"
    />
  );
}
