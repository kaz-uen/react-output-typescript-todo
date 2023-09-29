import React, { FC } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const BaseLayout: FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
