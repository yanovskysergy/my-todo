import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Draggable } from "react-beautiful-dnd";
import style from "./list-item.module.scss";

// Types
import { TodoItem } from "../../../types/types";

interface IProps {
  todo: TodoItem;
  index: number;
  deleteTodo: () => void;
}

export default ({ todo, index, deleteTodo }: IProps) => {
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
              <IconButton onClick={deleteTodo}>
                <Delete />
              </IconButton>
            </div>
          </Paper>
        </div>
      )}
    </Draggable>
  );
};
