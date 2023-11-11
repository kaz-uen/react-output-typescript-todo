import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
`;

const SNavUl = styled.ul`
  list-style: none;
  max-width: var(--fixed-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SNavLi = styled.li`
  border-right: solid 1px var(--color-grey-1);
  padding: 0.2rem 0.4rem;
  &:last-child {
    border-right: none;
  }
`;

const SLink = styled(Link)`
  color: var(--color-grey-1);
  transition: var(--transition);
  &:hover {
    color: var(--color-grey-5);
  }
`;

const Header: FC = () => {
  return (
    <SHeader>
      <h1>Todo List</h1>
      <nav>
        <SNavUl>
          <SNavLi>
            <SLink to="/">TOP</SLink>
          </SNavLi>
          <SNavLi>
            <SLink to="/create">新規作成</SLink>
          </SNavLi>
        </SNavUl>
      </nav>
    </SHeader>
  );
};

export default Header;
