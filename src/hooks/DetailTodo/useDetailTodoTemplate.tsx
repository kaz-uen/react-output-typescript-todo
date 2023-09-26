import { useEffect } from "react";
import useDetailTodoState from "./useDetailTodoState";

const useDetailTodoTemplate = () => {
  const { todoId, todoItemsData, todo, setTodo } = useDetailTodoState();

  useEffect(() => {
    todoItemsData.map((item) => {
      if (item.id === todoId) {
        setTodo(item);
      }
    });
  }, [todoId]);

  return { todo };
};

export default useDetailTodoTemplate;
