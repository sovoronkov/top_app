import React from "react";
import ToDoItem from "./ToDoItem";
import propTypes from "prop-types";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0 
    }
}

const  ToDoList = (props) => {
    return (
        <ul style={styles.ul}>
            { props.todos.map(todo => {
                return <ToDoItem 
                        todo={todo} 
                        key={todo.id} 
                        onChange={props.onToggle}/>
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    todos : propTypes.arrayOf(propTypes.object).isRequired,
    onToggle : propTypes.func.isRequired
}
export default ToDoList;