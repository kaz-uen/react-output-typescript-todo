import React, { FC } from 'react';
import styled from 'styled-components';
import BaseStyled from './Base';
import { ButtonPropsType } from '../../../types/ButtonType';

const StyledButton = styled(BaseStyled)`
  color: var(--color-white);
  background-color: var(--color-primary);
  border: solid 1px var(--color-primary);
  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background-color: var(--color-white);
  }
`;

const DefaultButton: FC<ButtonPropsType> = ({ type, className, onClick, children }) => {
  return (
    <StyledButton type={type} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

DefaultButton.defaultProps = {
  type: 'button'
};

export default DefaultButton;
