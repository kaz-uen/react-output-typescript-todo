import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { deleteTodo, searchTodo } from '../../../features/todo/slice';
import { openModal } from '../../../features/modal/slice';
import Form from '../../atoms/Form';
import ReverseColorButton from '../../atoms/Button/ReverseColor';
import LinkButton from '../../atoms/Link/Button';
import Modal from '../Modal';
import useTodo from '../../../features/todo/hooks/useTodo';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import PageTitle from '../../atoms/PageTitle';
import { PAGE_TITLE } from '../../../constants/InitialData';
import styled from 'styled-components';
import SearchInputBtn from '../../molecules/SearchInputBtn';

const SSection = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: var(--fixed-width);
`;

const SMessage = styled.p`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const SCreate = styled.div`
  text-align: center;
`;

const SFlex = styled.div`
  display: flex;
  align-items: center;
`;

const SSearch = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
`;

const STodoItem = styled.li`
  max-width: var(--fixed-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px var(--color-grey-5);
  margin-top: 1em;
  padding: 0.5em;
`;

const STodoLink = styled(Link)`
  color: var(--color-primary);
  transition: var(--transition);
  &:hover {
    color: var(--color-primary-light);
  }
`;

const SRemove = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
`;

const TopList: FC = () => {
  const Title = PAGE_TITLE.top;
  const dispatch: AppDispatch = useDispatch();

  const { todoItemsData, searchKeyword, filterVal, setFilterVal, isOpen } = useTodo();

  if (todoItemsData.length === 0) {
    return (
      <SSection>
        <PageTitle title={Title} />
        <SMessage>現在タスクはありません。</SMessage>
        <SCreate>
          <LinkButton to="/create">新規作成</LinkButton>
        </SCreate>
      </SSection>
    );
  }

  return (
    <SSection>
      <PageTitle title={Title} />

      <SSearch>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(searchTodo(filterVal));
          }}
        >
          <SearchInputBtn
            title={'タスクを探す'}
            id={'search'}
            type={'text'}
            value={filterVal}
            onChange={(e) => setFilterVal(e.target.value)}
            isSearchInput={true}
          />
        </Form>
      </SSearch>

      <ul>
        {todoItemsData &&
          todoItemsData
            .filter(item => item.title?.indexOf(searchKeyword) !== -1)
            .map((item) => {
              return (
                <STodoItem key={item.id}>
                  <STodoLink to={`/detail/${item.id}`}>
                    <span>{item.title}</span>
                  </STodoLink>

                  <SFlex>
                    <LinkButton to={`/edit/${item.id}`}>編集</LinkButton>
                    <ReverseColorButton onClick={() => dispatch(deleteTodo(item.id))}>完了</ReverseColorButton>
                  </SFlex>
                </STodoItem>
              );
            })}
      </ul>

      <SRemove>
        <ReverseColorButton onClick={() => dispatch(openModal())}>全削除</ReverseColorButton>
      </SRemove>

      {isOpen && <Modal />}
    </SSection>
  );
};

export default TopList;
