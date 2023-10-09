import { ComponentProps, FC } from "react";

type TextAreaProps = ComponentProps<"textarea">;

const TextArea: FC<TextAreaProps> = ({ title, id, placeholder, value, onChange }) => {
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
