import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Draggable } from "react-beautiful-dnd";
import style from "./list-item.module.scss";

const DraggableItemWrapper = ({ children, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default ({ todo, index, deleteTodo }) => {
  return (
    <DraggableItemWrapper id={todo.id} index={index}>
      <Paper className={style["list-item"]}>
        <p>{todo.text}</p>
        <div className={style["button-wrapper"]}>
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <Delete />
          </IconButton>
        </div>
      </Paper>
    </DraggableItemWrapper>
  );
};
