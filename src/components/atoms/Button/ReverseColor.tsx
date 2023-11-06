import React, { FC } from 'react';
import styled from 'styled-components';
import BaseStyled from './Base';
import { ButtonPropsType } from '../../../types/ButtonType';

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

const ReverseColorButton: FC<ButtonPropsType> = ({ type, className, onClick, children }) => {
  return (
    <StyledButton type={type} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

ReverseColorButton.defaultProps = {
  type: 'button'
};

export default ReverseColorButton;
