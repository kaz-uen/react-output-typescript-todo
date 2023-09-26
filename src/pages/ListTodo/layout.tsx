import { FC } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, searchTodo } from "../../features/TodoSlice";
import { openModal } from "../../features/ModalSlice";
import Form from "../../components/atoms/Form";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import Modal from "../../components/templates/Modal";
import useListTodoState from "../../hooks/ListTodo/useListTodoState";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const ListTodo: FC = () => {
  const {
    todoItemsData,
    amount,
    searchKeyword,
    filterVal,
    setFilterVal,
    isOpen,
  } = useListTodoState();

  const dispatch: AppDispatch = useDispatch();

  if (amount === 0) {
    return (
      <section className="todo no-task">
        <h2>Tasks</h2>
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
      <h2>Tasks</h2>

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
            <Button type={"submit"} className={"default-btn color-reverse-btn"}>検索</Button>
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

export default ListTodo;
