import "./App.css";
import { FC } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";

const App: FC = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
