import { FC } from "react";
import BaseLayout from "../components/templates/BaseLayout";
import EditTodoForm from "../components/organisms/EditTodo/EditTodoForm";

const EditTodo: FC = () => {
  return (
    <BaseLayout>
      <EditTodoForm />
    </BaseLayout>
  );
};

export default EditTodo;
