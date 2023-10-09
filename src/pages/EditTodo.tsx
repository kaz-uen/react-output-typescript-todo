import { FC } from "react";
import BaseLayout from "../components/templates/BaseLayout";
import EditTodoForm from "../components/organisms/Todo/EditForm";

const EditTodo: FC = () => {
  return (
    <BaseLayout>
      <EditTodoForm />
    </BaseLayout>
  );
};

export default EditTodo;
