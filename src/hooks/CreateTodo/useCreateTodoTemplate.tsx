import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { addTodo } from "../../features/TodoSlice";
import useCreateTodoState from "./useCreateTodoState";
import { EventType } from "../../types/EventType";

export const useCreateTodoTemplate = () => {
  const { todoTitle, setTodoTitle, todoContent, setTodoContent } =
    useCreateTodoState();

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeTitle: EventType["onChangeInput"] = useCallback((e) => {
    setTodoTitle(e.target.value);
  }, []);

  const handleChangeContent: EventType["onChangeTextArea"] = useCallback(
    (e) => {
      setTodoContent(e.target.value);
    },
    []
  );

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

  return [
    { todoTitle, todoContent },
    { handleChangeTitle, handleChangeContent, createTodoSubmit },
  ];
};
