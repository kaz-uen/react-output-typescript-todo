import { ModalStateType } from "../types/ModalType";
import { TodoItemType, TodoStateType } from "../types/TodoType";

export const INITIAL_TODO_LIST: TodoItemType[] = [
  {
    id: 1,
    title: "宿題をする",
    content: "夏休みの宿題を終わらせる",
  },
  {
    id: 2,
    title: "買い物に行く",
    content: "近くのスーパーに買い出しに行く",
  },
  {
    id: 3,
    title: "ジムに行く",
    content: "近所のジムで筋トレと有酸素運動をする",
  },
];

export const INITIAL_TODO_STATE: TodoStateType = {
  todoItemsData: INITIAL_TODO_LIST,
  amount: INITIAL_TODO_LIST.length,
  searchKeyword: "",
};

export const INITIAL_TODO_ID: number = 1;

export const INITIAL_MODAL_STATE: ModalStateType = {
  isOpen: false,
};
