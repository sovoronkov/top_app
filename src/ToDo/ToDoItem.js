import React from "react";
import propTypes from "prop-types";

const styles = {
   li: {
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center',
      padding : '.5rem 1rem',
      border : '2px solid #ccc',
      borderRadius : '50px',
      marginBottom : '.5rem'
    },
   input : {
        marginRight : '1rem',
    }
}

function ToDoItem ({todo, onChange}) {
    return (
        <li style = {styles.li}>
            <span>
                <input type="checkbox" 
                       style={styles.input} 
                       onChange={()=>onChange(todo.id)}></input>
            <strong>{todo.id}</strong>
            &nbsp;
            {todo.title}
            </span>
            <button className="rm">&times;</button>
        </li>
    );
}

ToDoItem.prototype = {
  todo : propTypes.object.isRequired,
  index : propTypes.number,
  onChange : propTypes.func.isRequired
}

export default ToDoItem;


