import { createSlice } from "@reduxjs/toolkit";
import { TodoStateType } from "../../types/TodoType";
import {
  INITIAL_TODO_STATE,
  INITIAL_TODO_ID,
} from "../../constants/InitialData";

const TodoSlice = createSlice({
  name: "todo",
  initialState: INITIAL_TODO_STATE,
  reducers: {
    addTodo(state, action): void {
      const getMaxTodoId: () => number = () => {
        let todoIdArray: number[] = [];
        state.todoItemsData.map((item) => {
          todoIdArray.push(item.id);
        });
        return Math.max(...todoIdArray);
      };
      const setTodoId: number =
        state.amount !== 0 ? getMaxTodoId() + 1 : INITIAL_TODO_ID;
      state.todoItemsData.push({
        id: setTodoId,
        title: action.payload.title,
        content: action.payload.content,
      });
      state.amount += 1;
      state.searchKeyword = "";
    },
    updateTodo(state, action): void {
      const newTodoItems = state.todoItemsData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            content: action.payload.content,
          };
        }
        return { ...item };
      });
      state.todoItemsData = newTodoItems;
    },
    deleteTodo(state, action): void {
      const newTodoItems = state.todoItemsData.filter((item) => {
        if (item.id !== action.payload) return true;
      });
      state.todoItemsData = newTodoItems;
      state.amount = state.todoItemsData.length;
    },
    clearTodo(state, action): TodoStateType {
      let newTodoState: TodoStateType = action.payload;
      newTodoState = { todoItemsData: [], amount: 0, searchKeyword: "" };
      return newTodoState;
    },
    searchTodo(state, action): void {
      state.searchKeyword = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, clearTodo, searchTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
