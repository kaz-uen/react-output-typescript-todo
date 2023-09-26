import "./App.css";
import { FC } from "react";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
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
