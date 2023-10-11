import { ComponentProps, FC } from "react";

const TextArea: FC<ComponentProps<"textarea">> = ({
  title,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
