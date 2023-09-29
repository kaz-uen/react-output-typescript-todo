import { FC } from "react";
import { clearTodo } from "../../features/actions/TodoSlice";
import { closeModal } from "../../features/actions/ModalSlice";
import Button from "../atoms/Button";
import useModalStateHandle from "../../features/hooks/Modal/useModalStateHandle";

const Modal: FC = () => {
  const { dispatch, todoItemsData, amount } = useModalStateHandle();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>タスクをすべて削除しますか？</h4>
        <div className="btn-container">
          <Button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearTodo({ todoItemsData, amount }));
              dispatch(closeModal());
            }}
          >
            はい
          </Button>
          <Button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            いいえ
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
