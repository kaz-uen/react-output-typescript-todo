import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { BaseStyledInput, BaseStyledLabel } from './Base';

const SLabel = styled(BaseStyledLabel)``;
const SInput = styled(BaseStyledInput)`
  width: ${({ disabled }) => (disabled ? '70%' : '100%')};
  margin-right: ${({ disabled }) => (disabled ? '0.2em' : '0')};
`;

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
};

const DefaultInput: FC<DefaultInputProps> = ({ disabled, title, id, type, placeholder, value, onChange }) => {
  return (
    <>
      {title && <SLabel htmlFor={id}>{title}</SLabel>}
      <SInput disabled={disabled} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

DefaultInput.defaultProps = {
  type: 'text',
  disabled: false
};

export default DefaultInput;
