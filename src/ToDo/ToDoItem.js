import React from "react";

function ToDoItem ({todo}) {
    return (
        <li>{todo.id} {todo.title}</li>
    );

}

export default ToDoItem;