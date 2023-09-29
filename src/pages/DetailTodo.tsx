import { FC } from "react";
import BaseLayout from "../components/templates/BaseLayout";
import DetailTodoContent from "../components/organisms/DetailTodo/DetailTodoContent";

const DetailTodo: FC = () => {
  return (
    <BaseLayout>
      <DetailTodoContent />
    </BaseLayout>
  );
};

export default DetailTodo;
