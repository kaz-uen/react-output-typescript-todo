import React, { FC } from 'react';
import BaseLayout from '../components/templates/BaseLayout';
import TopTodoList from '../components/organisms/Todo/TopList';

const TopTodo: FC = () => {
  return (
    <BaseLayout>
      <TopTodoList />
    </BaseLayout>
  );
};

export default TopTodo;
