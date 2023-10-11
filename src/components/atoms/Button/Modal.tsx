import { ComponentProps, FC } from "react";
import styled from "styled-components";

const ModalButton: FC<ComponentProps<"button">> = ({
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

ModalButton.defaultProps = {
  type: "button",
};

const StyledButton = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  color: var(--color-red-dark);
  border: 1px solid var(--color-red-dark);
  margin-top: 2.25rem;
  border-radius: var(--radius);
`;

export default ModalButton;
