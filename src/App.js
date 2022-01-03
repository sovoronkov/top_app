import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import ToDoList from './ToDo/ToDoList';
import ToDoItem from './ToDo/ToDoItem';
import React from 'react';

function App() {

  const [todos, setTodos] = React.useState ([
    {id:1, completed: false, title: 'Купить хлеба'},
    {id:2, completed: false, title: 'Купить масло'},
    {id:3, completed: false, title: 'Купить молоко'},
  ]);

  function toggleTodo (id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  };

  return (
    <div className="wrapper">
      <header> 
        <Header />
      </header> 
      <ToDoList todos={todos} onToggle = {toggleTodo}/>
    </div>
  );
}

export default App;

