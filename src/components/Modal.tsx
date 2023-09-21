import { FC } from "react";
import { clearTodo } from "../features/TodoSlice";
import { closeModal } from "../features/ModalSlice";
import useModal from "../hooks/useModal";

const Modal: FC = () => {
  const { dispatch, todoItemsData, amount } = useModal();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>タスクをすべて削除しますか？</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearTodo({ todoItemsData, amount }));
              dispatch(closeModal());
            }}
          >
            はい
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            いいえ
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
