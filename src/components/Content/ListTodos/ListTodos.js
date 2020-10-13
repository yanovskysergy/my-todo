import React from "react";
import ListItem from "../ListItem/ListItem";
import { Container } from "@material-ui/core";
import "./list-todos.scss";

export default ({ todos, deleteTodo }) => {
  return (
    <Container id="root-todos-container" maxWidth="md">
      {todos.map((todo, index) => {
        return (
          <ListItem
            key={index}
            todo={todo}
            deleteTodo={() => deleteTodo(index)}
          />
        );
      })}
    </Container>
  );
};
