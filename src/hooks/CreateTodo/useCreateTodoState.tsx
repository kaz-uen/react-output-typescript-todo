import { useState } from "react";

const useCreateTodoState = () => {
  const [todoTitle, setTodoTitle] = useState<string | undefined>("");
  const [todoContent, setTodoContent] = useState<string | undefined>("");

  return { todoTitle, setTodoTitle, todoContent, setTodoContent };
};

export default useCreateTodoState;
