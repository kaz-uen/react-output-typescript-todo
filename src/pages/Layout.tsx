import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};

export default Layout;
