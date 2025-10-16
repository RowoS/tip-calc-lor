'use client'

import Image, { StaticImageData } from "next/image";

interface InputFieldProps {
  icon: StaticImageData;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  error?: boolean;
}

export default function InputField({ icon, placeholder = "0", value, onChange, type = "text", error = false}: InputFieldProps) {
  return (
    <div className={`bg-input-field-color flex flex-row w-full justify-between rounded-md transition-colors py-2 px-3 ${
    error ? 'border-2 border-red-500' : 'border-2 border-input-field-color hover:border-input-field-hover-color'}`}>
      <Image
        src={icon}
        alt=""
        className="self-center w-3 h-4 sm:w-auto sm:h-auto"
      />
      <input 
        className="bg-transparent text-input-text-color text-right text-xl sm:text-2xl outline-0 cursor-pointer flex-1 ml-2 font-bold" 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}