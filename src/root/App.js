import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style["App"]}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
