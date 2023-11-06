import React, { FC } from 'react';
import { InputPropsType } from '../../../types/InputType';
import styled from 'styled-components';
import { BaseStyledInput, BaseStyledLabel } from './Base';

const SLabel = styled(BaseStyledLabel)``;
const SInput = styled(BaseStyledInput)<{ isSearchInput: boolean }>`
  width: ${({ isSearchInput }) => (isSearchInput ? '70%' : '100%')};
  margin-right: ${({ isSearchInput }) => (isSearchInput ? '0.2em' : '0')};
`;

const DefaultInput: FC<InputPropsType> = ({ isSearchInput, title, id, type, placeholder, value, onChange }) => {
  return (
    <>
      {title && <SLabel htmlFor={id}>{title}</SLabel>}
      <SInput
        isSearchInput={isSearchInput || false}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

DefaultInput.defaultProps = {
  type: 'text'
};

export default DefaultInput;
