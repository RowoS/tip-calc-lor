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
    <div className={`bg-input-field-color flex flex-row w-full justify-between rounded-md transition-colors ${
    error ? 'border-2 border-red-500' : 'border-2 border-input-field-color hover:border-input-field-hover-color'}`}>
      <Image
        src={icon}
        alt=""
        className="ml-2.5 self-center"
        // style={{width: 'auto', height: 'auto'}}
      />
      <input 
        className="bg-transparent text-input-text-color text-right text-2xl outline-0 mr-2 mt-0.5 mb-0.5 cursor-pointer" 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}