import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';
import { BaseStyledInput, BaseStyledLabel } from './Base';

const SLabel = styled(BaseStyledLabel)``;
const SInput = styled(BaseStyledInput)`
  width: 70%;
  padding: 0.5em 1em;
  margin-right: 0.2em;
`;

const SearchInput: FC<ComponentProps<'input'>> = ({ title, id, type, placeholder, value, onChange }) => {
  if (!title) {
    return <SInput id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
  }

  return (
    <>
      <SLabel htmlFor={id}>{title}</SLabel>
      <SInput id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

SearchInput.defaultProps = {
  type: 'text'
};

export default SearchInput;
