import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Draggable } from "react-beautiful-dnd";
import style from "./list-item.module.scss";

export default ({ todo, index, deleteTodo }) => {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={style["list-item"]}>
            <p>{todo.text}</p>
            <div className={style["button-wrapper"]}>
              <IconButton onClick={() => deleteTodo(todo.id)}>
                <Delete />
              </IconButton>
            </div>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};
