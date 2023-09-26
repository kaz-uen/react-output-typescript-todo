import { useState } from "react";
import { useSelector } from "../../store/store";
import { TodoItemType } from "../../types/TodoType";

const useEditTodoState = () => {
  const [todo, setTodo] = useState<TodoItemType | undefined>();
  const [updateTitle, setUpdateTitle] = useState<string | undefined>("");
  const [updateContent, setUpdateContent] = useState<string | undefined>("");
  const { todoItemsData } = useSelector((state) => state.todo);

  return {
    todo,
    setTodo,
    updateTitle,
    setUpdateTitle,
    updateContent,
    setUpdateContent,
    todoItemsData,
  };
};

export default useEditTodoState;
