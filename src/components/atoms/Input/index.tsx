import { ComponentProps, FC } from "react";

const Input: FC<ComponentProps<"input">> = ({
  title,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
