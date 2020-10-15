import React from "react";
import { Container } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import arrayReorder from "../../../metods/arrayReorder";
import ListItem from "../ListItem/ListItem";
import style from "./list-todos.module.scss";

export default ({ todos, setTodos, deleteTodo }) => {
  function onDragEnd({ destination, source }) {
    if (destination && destination.index !== source.index) {
      setTodos(arrayReorder(todos, source.index, destination.index));
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={style["root-todos-container"]}
            maxWidth="md"
          >
            {todos.length > 0
              ? todos.map((todo, index) => (
                  <ListItem
                    todo={todo}
                    index={index}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                  />
                ))
              : "You have no tasks"}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};
