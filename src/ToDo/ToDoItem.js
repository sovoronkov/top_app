import React from "react";
import propTypes from "prop-types";

function ToDoItem ({todo}) {
    return (
        <li>
            <span>
                <input type="checkbox"></input>
            </span>
            <stromg>{todo.id}</stromg>
            {todo.title}
        </li>
    );
}

ToDoItem.prototype = {
  todo : propTypes.object.isRequired,
  index : propTypes.number
}

export default ToDoItem;


