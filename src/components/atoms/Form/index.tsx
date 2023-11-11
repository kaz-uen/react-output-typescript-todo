import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';

const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form: FC<ComponentProps<'form'>> = ({ onSubmit, className, children }) => {
  return (
    <SForm onSubmit={onSubmit} className={className}>
      {children}
    </SForm>
  );
};

export default Form;
