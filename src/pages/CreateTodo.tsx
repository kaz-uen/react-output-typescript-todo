import BaseLayout from '../components/templates/BaseLayout';
import CreateTodoForm from '../components/organisms/Todo/CreateForm';
import React, { FC } from 'react';

const CreateTodo: FC = () => {
  return (
    <BaseLayout>
      <CreateTodoForm />
    </BaseLayout>
  );
};

export default CreateTodo;
