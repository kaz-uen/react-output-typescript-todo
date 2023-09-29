import BaseLayout from "../components/templates/BaseLayout";
import CreateTodoForm from "../components/organisms/CreateTodo/CreateTodoForm";
import { FC } from "react";

const CreateTodo: FC = () => {
  return (
    <BaseLayout>
      <CreateTodoForm />
    </BaseLayout>
  );
};

export default CreateTodo;
