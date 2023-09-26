import { FC } from "react";
import { TextAreaProps } from "../../../types/TodoType";

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
