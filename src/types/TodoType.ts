import { ComponentProps } from "react";

export type TodoItemType = {
  id: number;
  title?: string;
  content?: string;
};

export type TodoStateType = {
  todoItemsData: TodoItemType[];
  amount: number;
  searchKeyword: string;
};

export type FormProps = ComponentProps<"form">;
export type InputProps = ComponentProps<"input">;
export type ButtonProps = ComponentProps<"button">;
export type TextAreaProps = ComponentProps<"textarea">;
