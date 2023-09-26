import { FC } from "react";
import { FormProps } from "../../../types/TodoType";

const Form: FC<FormProps> = ({ onSubmit, className, children }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
