import React, { FC } from 'react';
import styled from 'styled-components';
import { TextareaPropsType } from '../../../types/TextareaType';

const SLabel = styled.label`
  display: block;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const STextarea = styled.textarea`
  padding: 0.5em 1em;
  display: block;
  width: 30rem;
  height: 10rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const TextArea: FC<TextareaPropsType> = ({ title, id, placeholder, value, onChange }) => {
  return (
    <>
      {title && <SLabel htmlFor={id}>{title}</SLabel>}
      <STextarea id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};

export default TextArea;
