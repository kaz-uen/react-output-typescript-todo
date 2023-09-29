import { useCallback, useState } from "react";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EventType } from "../../../types/EventType";
import { addTodo } from "../../actions/TodoSlice";

const useSample = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [todoTitle, setTodoTitle] = useState<string | undefined>("");
  const [todoContent, setTodoContent] = useState<string | undefined>("");

  const createTodoSubmit: EventType["onSubmit"] = useCallback(
    (e) => {
      e.preventDefault();
      const isTitle = todoTitle?.trim() !== "";
      const isContent = todoContent?.trim() !== "";
      if (isTitle && isContent) {
        dispatch(
          addTodo({ title: todoTitle?.trim(), content: todoContent?.trim() })
        );
        navigate("/");
      } else {
        alert("タイトルと詳細内容をどちらも入力してください。");
      }
    },
    [todoTitle, todoContent]
  );

  return {
    todoTitle, setTodoTitle,
    todoContent, setTodoContent,
    createTodoSubmit
  };
};

export default useSample;
