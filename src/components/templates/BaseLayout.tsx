import React, { FC } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import styled from "styled-components";

const BaseLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <SMain>{children}</SMain>
      <Footer />
    </>
  );
};

const SMain = styled.main`
  margin-top: 1em;
  margin-bottom: 1em;
  min-height: 100vh;
`;

export default BaseLayout;
