import { FC } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, searchTodo } from "../../../features/actions/TodoSlice";
import { openModal } from "../../../features/actions/ModalSlice";
import Form from "../../atoms/Form";
import Input from "../../atoms/Input";
import DefaultButton from "../../atoms/Button/Default";
import ReverseColorButton from "../../atoms/Button/ReverseColor";
import LinkButton from "../../atoms/Link/Button";
import Modal from "../Modal";
import useTopList from "../../../features/hooks/TodoStateHandle/useTopList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import PageTitle from "../../atoms/PageTitle";
import { PAGE_TITLE } from "../../../constants/InitialData";
import styled from "styled-components";

const TopList: FC = () => {
  const Title = PAGE_TITLE.top;
  const dispatch: AppDispatch = useDispatch();

  const {
    todoItemsData,
    amount,
    searchKeyword,
    filterVal,
    setFilterVal,
    isOpen,
  } = useTopList();

  if (amount === 0) {
    return (
      <SSection>
        <PageTitle title={Title} />
        <div className="todo-comment">
          <p>現在タスクはありません。</p>
        </div>
        <div className="todo-create">
          <LinkButton>
            <Link to="/create">新規作成</Link>
          </LinkButton>
        </div>
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
          <label htmlFor="search">タスクを探す</label>
          <div className="search-box">
            <Input
              id={"search"}
              type={"text"}
              value={filterVal}
              onChange={(e) => setFilterVal(e.target.value)}
            />
            <DefaultButton type={"submit"}>検索</DefaultButton>
          </div>
        </Form>
      </SSearch>

      <STodoList>
        {todoItemsData &&
          todoItemsData
            .filter((item) => {
              return item.title?.indexOf(searchKeyword) !== -1;
            })
            .map((item) => {
              return (
                <li key={item.id} className="todo-item">
                  <Link to={`/detail/${item.id}`}>
                    <span>{item.title}</span>
                  </Link>

                  <SFlex>
                    <LinkButton>
                      <Link to={`/edit/${item.id}`}>編集</Link>
                    </LinkButton>
                    <ReverseColorButton
                      onClick={() => dispatch(deleteTodo(item.id))}
                    >
                      完了
                    </ReverseColorButton>
                  </SFlex>
                </li>
              );
            })}
      </STodoList>

      <SRemove>
        <ReverseColorButton onClick={() => dispatch(openModal())}>
          全削除
        </ReverseColorButton>
      </SRemove>

      {isOpen && <Modal />}
    </SSection>
  );
};

const SSection = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: var(--fixed-width);
  & > h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }
  & > .todo-comment {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  & > .todo-create {
    text-align: center;
  }
`;

const SFlex = styled.div`
  display: flex;
  align-items: center;
`;

const SSearch = styled.div`
  margin-top: 1em;
  margin-bottom: 2em;
  & .search-box {
    display: flex;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    & > input {
      width: 20rem;
      padding: 0.5em 1em;
      margin-right: 0.1rem;
    }
  }
`;

const STodoList = styled.ul`
  & > .todo-item {
    max-width: var(--fixed-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px var(--color-grey-5);
    margin-top: 1em;
    padding: 0.5em;
    & > a {
      color: var(--color-primary);
      transition: var(--transition);
      &:hover {
        color: var(--color-primary-light);
      }
    }
  }
`;

const SRemove = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
`;

export default TopList;
