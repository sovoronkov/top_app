import React from "react";
import ToDoItem from "./ToDoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0 
    }
}

const  TodoList = (props) => {
    return (
        <ul style={styles.ul}>
            { props.todos.map(todo => {
                return <ToDoItem todo={todo} key={todo.id} />
            }) }

        </ul>
    )
}

export default TodoList;