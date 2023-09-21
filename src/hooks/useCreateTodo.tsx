import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";

const useCreateTodo = () => {
  const [todoTitle, setTodoTitle] = useState<string | undefined>("");
  const [todoContent, setTodoContent] = useState<string | undefined>("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return {
    todoTitle,
    setTodoTitle,
    todoContent,
    setTodoContent,
    dispatch,
    navigate,
  };
};

export default useCreateTodo;
