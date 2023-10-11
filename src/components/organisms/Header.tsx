import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <SHeader>
      <h1>Todo List</h1>
      <SNav>
        <ul className="nav-list">
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/create">新規作成</Link>
          </li>
        </ul>
      </SNav>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
`;

const SNav = styled.nav`
  & .nav-list {
    list-style: none;
    max-width: var(--fixed-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & li {
      border-right: solid 1px var(--color-grey-1);
      padding: 0.2rem 0.4rem;
      &:last-child {
        border-right: none;
      }
    }
    & a {
      color: var(--color-grey-1);
      transition: var(--transition);
      &:hover {
        color: var(--color-grey-5);
      }
    }
  }
`;

export default Header;
