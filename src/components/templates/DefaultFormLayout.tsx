import React, { FC } from 'react';
import styled from 'styled-components';

const SFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: var(--fixed-width);
`;

const DefaultFormLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SFormLayout>{children}</SFormLayout>;
};

export default DefaultFormLayout;
