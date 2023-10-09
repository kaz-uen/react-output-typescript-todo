import { ComponentProps, FC } from "react";

type FormProps = ComponentProps<"form">;

const Form: FC<FormProps> = ({ onSubmit, className, children }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
