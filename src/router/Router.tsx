import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import ListTodo from "../pages/ListTodo/layout";
import DetailTodo from "../pages/DetailTodo/layout";
import CreateTodo from "../pages/CreateTodo/layout";
import EditTodo from "../pages/EditTodo/layout";
import NotFound from "../pages/NotFound";

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
