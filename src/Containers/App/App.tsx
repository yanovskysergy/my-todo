import React from "react";
import Header from "../../components/Header/Header";
import Content from "../Content/Content";
import Footer from "../../components/Footer/Footer";
import style from "./App.module.scss";
import Navigation from "../../components/Navigation/Navigation";

function App() {
  return (
    <div className={style["App"]}>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
