import { ComponentProps, FC } from "react";
import styled from "styled-components";
import BaseStyled from "./Base";

const ReverseColorButton: FC<ComponentProps<"button">> = ({
  type,
  className,
  onClick,
  children,
}) => {
  return (
    <StyledButton type={type} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

ReverseColorButton.defaultProps = {
  type: "button",
};

const StyledButton = styled(BaseStyled)`
  color: var(--color-primary);
  background-color: var(--color-white);
  border: solid 1px var(--color-primary);
  &:hover {
    color: var(--color-white);
    border-color: var(--color-white);
    background-color: var(--color-primary);
  }
`;

export default ReverseColorButton;
