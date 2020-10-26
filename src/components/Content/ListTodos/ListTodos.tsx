import React from "react";
import { Container } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import arrayReorder from "../../../metods/arrayReorder";
import ListItem from "../ListItem/ListItem";
import style from "./list-todos.module.scss";
import { TodoItem } from "../../../types/types";

interface IProps {
  todos: TodoItem[];
  setTodos: (todos: TodoItem[]) => void;
  deleteTodo: (id: string) => void;
}

export default ({ todos, setTodos, deleteTodo }: IProps) => {
  function onDragEnd({ destination, source }: any) {
    if (destination && destination.index !== source.index) {
      setTodos(arrayReorder<TodoItem>(todos, source.index, destination.index));
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
                    key={todo.id}
                    index={index}
                    todo={todo}
                    deleteTodo={() => deleteTodo(todo.id)}
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
