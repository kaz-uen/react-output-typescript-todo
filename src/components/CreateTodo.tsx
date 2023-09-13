import { FC, useState } from "react";
import { addTodo } from "../features/TodoSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";


const CreateTodo: FC = () => {
  const [ todoTitle, setTodoTitle ] = useState<string | undefined>("");
  const [ todoContent, setTodoContent ] = useState<string | undefined>("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="form common-form flex-form">
      <h2>Create Todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoTitle && todoContent) {
            dispatch(addTodo({ title: todoTitle, content: todoContent }));
            navigate("/");
          } else {
            alert("タイトルと詳細内容をどちらも入力してください。");
          }
        }}
      >
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          type="text"
          placeholder="タイトルを入力"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />

        <label htmlFor="content">詳細内容</label>
        <textarea
          id="content"
          placeholder="詳細を入力"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <div className="btn-center">
          <button className="default-btn color-reverse-btn">追加</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
