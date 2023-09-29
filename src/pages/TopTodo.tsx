import { FC } from "react";
import BaseLayout from "../components/templates/BaseLayout";
import TopTodoList from "../components/organisms/TopTodo/TopTodoList";

const TopTodo: FC = () => {
  return (
    <BaseLayout>
      <TopTodoList />
    </BaseLayout>
  );
};

export default TopTodo;
