import React, { FC } from 'react';
import BaseLayout from '../components/templates/BaseLayout';
import DetailTodoContent from '../components/organisms/Todo/DetailContent';

const DetailTodo: FC = () => {
  return (
    <BaseLayout>
      <DetailTodoContent />
    </BaseLayout>
  );
};

export default DetailTodo;
