import { FC } from "react";
import { Link } from "react-router-dom";
import useDetailTodo from "../hooks/useDetailTodo";

const DetailTodo: FC = () => {
  const todo = useDetailTodo();

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
        <Link className="default-btn" to="/">
          TOPへ戻る
        </Link>
      </div>
    </>
  );
};

export default DetailTodo;
