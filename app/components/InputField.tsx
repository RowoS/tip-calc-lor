'use client'

import Image, { StaticImageData } from "next/image";

interface InputFieldProps {
  icon: StaticImageData;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
}

export default function InputField({ icon, placeholder = "0", value, onChange, type = "text" }: InputFieldProps) {
  return (
    <div className="bg-input-field-color flex flex-row border-black w-full justify-between">
      <Image
        src={icon}
        alt=""
        className="ml-2.5"
      />
      <input 
        className="text-input-text-color text-right text-4x1" 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}