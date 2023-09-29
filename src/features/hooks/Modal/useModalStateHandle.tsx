import { useDispatch } from "react-redux";
import { useSelector, AppDispatch } from "../../../store/store";

const useModalStateHandle = () => {
  const dispatch: AppDispatch = useDispatch();
  const { todoItemsData, amount } = useSelector((state) => state.todo);

  return { dispatch, todoItemsData, amount };
};

export default useModalStateHandle;
