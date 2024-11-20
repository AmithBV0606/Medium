import { ChangeEvent } from "react";

type InputType = {
  type: string;
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, placeholder, onChange, type }: InputType) => {
  return (
    <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
            {label}
        </label>

        <input
            type={type}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 mb-4"
            placeholder={placeholder}
            required
            onChange={onChange}
        />
    </div>
  );
};

export default Input;
