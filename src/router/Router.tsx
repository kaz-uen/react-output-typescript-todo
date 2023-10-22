import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TopTodo from '../pages/TopTodo';
import DetailTodo from '../pages/DetailTodo';
import CreateTodo from '../pages/CreateTodo';
import EditTodo from '../pages/EditTodo';
import NotFound from '../pages/NotFound';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<TopTodo />} />
        <Route path={`detail/:paramId`} element={<DetailTodo />} />
      </Route>
      <Route path="/create" element={<CreateTodo />} />
      <Route path={`/edit/:paramId`} element={<EditTodo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
