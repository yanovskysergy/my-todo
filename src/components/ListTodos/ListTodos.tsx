import React from "react";
import { Container } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from "../ListItem/ListItem";
import style from "./list-todos.module.scss";
import { StoreState } from "../../store/reducers";
import { reorderTodo } from "../../store/actions/todos";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: StoreState) => state.todos);

  function onDragEnd({ destination, source }: any) {
    if (destination && destination.index !== source.index) {
      dispatch(reorderTodo(source.index, destination.index));
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
                  <ListItem key={todo.id} index={index} todo={todo} />
                ))
              : "You have no tasks"}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};
