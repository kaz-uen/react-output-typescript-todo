import { FC } from "react";
import { clearTodo } from "../../features/actions/TodoSlice";
import { closeModal } from "../../features/actions/ModalSlice";
import Button from "../atoms/Button";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";

const Modal: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>タスクをすべて削除しますか？</h4>
        <div className="btn-container">
          <Button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearTodo());
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
