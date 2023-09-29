import { FC } from "react";
import { FormProps } from "../../../types/FormType";

const Form: FC<FormProps> = ({ onSubmit, className, children }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
