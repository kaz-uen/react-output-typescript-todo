import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { updateTodo } from "../../features/TodoSlice";
import useEditTodoState from "./useEditTodoState";
import { EventType } from "../../types/EventType";

export const useEditTodoTemplate = () => {
  const {
    todo,
    setTodo,
    updateTitle,
    setUpdateTitle,
    updateContent,
    setUpdateContent,
    todoItemsData,
  } = useEditTodoState();

  const todoId = Number(useParams().paramId);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    todoItemsData.map((item) => {
      if (item.id === todoId) {
        setTodo(item);
        setUpdateTitle(item.title);
        setUpdateContent(item.content);
      }
    });
  }, [todoId]);

  const handleChangeTitle: EventType["onChangeInput"] = useCallback((e) => {
    setUpdateTitle(e.target.value);
  }, []);

  const handleChangeContent: EventType["onChangeTextArea"] = useCallback(
    (e) => {
      setUpdateContent(e.target.value);
    },
    []
  );

  const updateTodoSubmit: EventType["onSubmit"] = useCallback(
    (e) => {
      e.preventDefault();
      const isTitle = updateTitle?.trim() !== "";
      const isContent = updateContent?.trim() !== "";
      if (isTitle && isContent) {
        dispatch(
          updateTodo({
            id: todo?.id,
            title: updateTitle?.trim(),
            content: updateContent?.trim(),
          })
        );
        navigate("/");
      } else {
        alert("タイトルと詳細内容をどちらも入力してください。");
      }
    },
    [updateTitle, updateContent]
  );

  return [
    { updateTitle, updateContent },
    { handleChangeTitle, handleChangeContent, updateTodoSubmit },
  ];
};
