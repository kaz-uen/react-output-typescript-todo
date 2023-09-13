import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../components/Home";
import ListTodo from "../components/ListTodo";
import DetailTodo from "../components/DetailTodo";
import CreateTodo from "../components/CreateTodo";
import EditTodo from "../components/EditTodo";
import NotFound from "../components/NotFound";

const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<ListTodo />} />
            <Route path={`detail/:paramId`} element={<DetailTodo />} />
          </Route>
          <Route path="/create" element={<CreateTodo />} />
          <Route path={`/edit/:paramId`} element={<EditTodo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
