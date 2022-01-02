import React from "react";
import propTypes from "prop-types";

const styles = {
    li: {
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center',
      padding : '.5rem 1rem ',
      border : '1px solid #ccc',
      borderRadisu : '4px',
      marginBottom : '.5rem'

    }
}

function ToDoItem ({todo}) {
    return (
        <li style = {styles.li}>
            <span>
                <input type="checkbox"></input>
            </span>
            <strong>{todo.id}</strong>
            {todo.title}
        </li>
    );
}

ToDoItem.prototype = {
  todo : propTypes.object.isRequired,
  index : propTypes.number
}

export default ToDoItem;


