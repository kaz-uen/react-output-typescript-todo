import { ComponentProps, FC } from "react";

type ButtonProps = ComponentProps<"button">;

const Button: FC<ButtonProps> = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  className: "default-btn",
};

export default Button;
