import { FC } from "react";
import { clearTodo } from "../../features/TodoSlice";
import { closeModal } from "../../features/ModalSlice";
import Button from "../atoms/Button";
import useModal from "../../hooks/Modal/useModal";

const Modal: FC = () => {
  const { dispatch, todoItemsData, amount } = useModal();

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
