import React, {useContext} from "react";
import propTypes from "prop-types";
import Context from "../context";

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
    const {removeToDo} = useContext(Context);
    const classes = [];
    if(todo.completed) {
        classes.push('done');
    }

    return (
        <li style = {styles.li}>
            <span className = {classes.join(' ')}>
                <input type="checkbox" 
                       style={styles.input} 
                       checked = {todo.conpleated}
                       onChange={()=>onChange(todo.id)}></input>
            <strong>{todo.id}</strong>
            &nbsp;
            {todo.title}
            </span>
            <button className="rm" onClick={removeToDo.bind(null,todo.id)}>&times;</button>
        </li>
    );
}

ToDoItem.prototype = {
  todo : propTypes.object.isRequired,
  index : propTypes.number,
  onChange : propTypes.func.isRequired
}

export default ToDoItem;


