import React, { ComponentProps, FC } from 'react';
import DefaultButton from '../atoms/Button/Default';
import SearchInput from '../atoms/Input/SearchInput';
import styled from 'styled-components';

const SSearchInputBtn = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const SearchInputBtn: FC<ComponentProps<'input'>> = ({ title, id, type, placeholder, value, onChange }) => {
  return (
    <SSearchInputBtn>
      <SearchInput title={title} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <DefaultButton type={'submit'}>検索</DefaultButton>
    </SSearchInputBtn>
  );
};

export default SearchInputBtn;
