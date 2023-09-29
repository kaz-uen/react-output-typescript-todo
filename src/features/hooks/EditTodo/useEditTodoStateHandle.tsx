import { useCallback, useEffect, useState } from "react";
import { AppDispatch, useSelector } from "../../../store/store";
import { TodoItemType } from "../../../types/TodoType";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EventType } from "../../../types/EventType";
import { updateTodo } from "../../actions/TodoSlice";

const useEditTodoStateHandle = () => {
  const [todo, setTodo] = useState<TodoItemType | undefined>();
  const [updateTitle, setUpdateTitle] = useState<string | undefined>("");
  const [updateContent, setUpdateContent] = useState<string | undefined>("");
  const { todoItemsData } = useSelector((state) => state.todo);

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

  return {
    updateTitle,
    setUpdateTitle,
    updateContent,
    setUpdateContent,
    updateTodoSubmit,
  };
};

export default useEditTodoStateHandle;
