import { useState } from "react";
import { useSelector } from "../../store/store";
import { useParams } from "react-router-dom";
import { TodoItemType } from "../../types/TodoType";

const useDetailTodoState = () => {
  const todoId = Number(useParams<string>().paramId);
  const { todoItemsData } = useSelector((state) => state.todo);
  const [todo, setTodo] = useState<TodoItemType>({
    id: 0,
    title: "",
    content: "",
  });

  return { todoId, todoItemsData, todo, setTodo };
};

export default useDetailTodoState;
