import { useDispatch } from "react-redux";
import { useSelector, AppDispatch } from "../store/store";

const useModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todoItemsData, amount } = useSelector((state) => state.todo);

  return { dispatch, todoItemsData, amount };
};

export default useModal;
