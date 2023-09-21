import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector, AppDispatch } from "../store/store";

const useListTodo = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todoItemsData, amount, searchKeyword } = useSelector(
    (state) => state.todo
  );
  const [filterVal, setFilterVal] = useState("");
  const { isOpen } = useSelector((state) => state.modal);

  return {
    dispatch,
    todoItemsData,
    amount,
    searchKeyword,
    filterVal,
    setFilterVal,
    isOpen,
  };
};

export default useListTodo;
