import { ComponentProps, FC } from "react";

const Form: FC<ComponentProps<"form">> = ({
  onSubmit,
  className,
  children,
}) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
