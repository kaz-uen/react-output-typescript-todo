import { FC } from "react";
import { Link } from "react-router-dom";
import useDetailTodoTemplate from "../../hooks/DetailTodo/useDetailTodoTemplate";

const DetailTodo: FC = () => {
  const { todo } = useDetailTodoTemplate();
  const { id, title, content } = todo;
  const texts = content?.split(/(\n)/).map((text) => {
    return text.match(/\n/) ? <br /> : text;
  });

  return (
    <>
      <div className="content">
        <p className="content-number">ID: {id}</p>
        <h3 className="content-title">{title}</h3>
        <div className="content-body">
          <p>
            内容: <br />
            {texts}
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
