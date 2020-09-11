import React from "react";
import "./App.scss";
import Header from "../components/Header/Header";
import ListTodos from "../components/ListTodos/ListTodos";

function App() {
  return (
    <div className="App">
      <Header />
      <ListTodos />
    </div>
  );
}

export default App;
