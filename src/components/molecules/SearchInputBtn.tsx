import React, { FC } from 'react';
import DefaultButton from '../atoms/Button/Default';
import Input from '../atoms/Input/Default';
import { InputPropsType } from '../../types/InputType';
import styled from 'styled-components';

const SSearchInputBtn = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const SearchInputBtn: FC<InputPropsType> = ({ title, id, type, placeholder, value, onChange, isSearchInput }) => {
  return (
    <SSearchInputBtn>
      <Input
        title={title}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isSearchInput={isSearchInput}
      />
      <DefaultButton type={'submit'}>検索</DefaultButton>
    </SSearchInputBtn>
  );
};

export default SearchInputBtn;
