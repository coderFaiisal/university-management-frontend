"use client";

import { Input } from "antd";
import { useForm, Controller } from "react-hook-form";

interface IInput {
  name: string;
  label?: string;
  type?: string;
  size?: "large" | "small";
  value?: string;
  id?: string;
  placeholder?: string;
  validation?: object;
}

const FormInput = ({
  name,
  label,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
}: IInput) => {
  const { control } = useForm();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            type={type}
            size={size}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInput;
