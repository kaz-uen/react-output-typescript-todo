import React, { FC } from "react";
import styled from "styled-components";

const DefaultFormLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SFormLayout>{children}</SFormLayout>;
};

const SFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: var(--fixed-width);

  & input {
    padding: 0.5em 1em;
    width: 30rem;
  }
  & textarea {
    padding: 0.5em 1em;
    width: 30rem;
  }

  & input,
  & textarea,
  & button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  & textarea {
    display: block;
    height: 10rem;
  }
`;

export default DefaultFormLayout;
