import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';

const StyledLink = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.375rem 0.75rem;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    transition: var(--transition);
    text-align: center;
    color: var(--color-white);
    background-color: var(--color-primary);
    border: solid 1px var(--color-primary);
    &:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
      background-color: var(--color-white);
    }
  }
`;

const LinkButton: FC<ComponentProps<'div'>> = ({ children }) => {
  return <StyledLink>{children}</StyledLink>;
};

export default LinkButton;
