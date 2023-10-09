import { FC } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, searchTodo } from "../../../features/actions/TodoSlice";
import { openModal } from "../../../features/actions/ModalSlice";
import Form from "../../atoms/Form";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Modal from "../Modal";
import useTopList from "../../../features/hooks/TodoStateHandle/useTopList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import PageTitle from "../../atoms/PageTitle";
import { PAGE_TITLE } from "../../../constants/InitialData";

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
      <section className="todo no-task">
        <PageTitle title={Title} />
        <div className="todo-comment">
          <p>現在タスクはありません。</p>
        </div>
        <div className="todo-create">
          <Button className={"default-btn"}>
            <Link to="/create">新規作成</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="todo">
      <PageTitle title={Title} />

      <div className="search">
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
            <Button type={"submit"} className={"default-btn color-reverse-btn"}>
              検索
            </Button>
          </div>
        </Form>
      </div>

      <ul className="todo-list">
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

                  <div>
                    <Button className={"default-btn"}>
                      <Link to={`/edit/${item.id}`}>編集</Link>
                    </Button>

                    <Button
                      className={"default-btn"}
                      onClick={() => dispatch(deleteTodo(item.id))}
                    >
                      完了
                    </Button>
                  </div>
                </li>
              );
            })}
      </ul>

      <div className="todo-remove btn-center">
        <Button className={"default-btn"} onClick={() => dispatch(openModal())}>
          全削除
        </Button>
      </div>

      {isOpen && <Modal />}
    </section>
  );
};

export default TopList;
