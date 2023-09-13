import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "../store/store";
import { TodoItemType } from "../types/TodoType";

const DetailTodo: FC = () => {
  const todoId = Number(useParams<string>().paramId);
  const { todoItemsData } = useSelector((state) => state.todo);
  const [ todo, setTodo ] = useState<TodoItemType>({
    id: 0,
    title: "",
    content: "",
  });

  useEffect(() => {
    todoItemsData.map((item) => {
      if (item.id === todoId) {
        setTodo(item);
      }
    });
  }, [todoId]);

  return (
    <>
      <div className="content">
        <p className="content-number">ID: {todo.id}</p>
        <h3 className="content-title">{todo.title}</h3>
        <div className="content-body">
          <p>
            内容: <br />
            {todo.content}
          </p>
        </div>
      </div>

      <div className="btn-center">
        <Link className="default-btn" to="/">TOPへ戻る</Link>
      </div>
    </>
  );
};

export default DetailTodo;
