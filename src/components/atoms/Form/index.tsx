import React, { FC } from 'react';
import styled from 'styled-components';
import { FormPropsType } from '../../../types/FormType';

const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form: FC<FormPropsType> = ({ onSubmit, className, children }) => {
  return (
    <SForm onSubmit={onSubmit} className={className}>
      {children}
    </SForm>
  );
};

export default Form;
