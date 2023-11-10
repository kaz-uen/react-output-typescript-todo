export interface ButtonPropsType {
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
