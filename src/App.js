import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import ToDoList from './ToDo/ToDoList';
import ToDoItem from './ToDo/ToDoItem';
import React , {useEffect} from 'react';
import Context from './context';
import AddToDo from './ToDo/AddToDo';
import Loader from './loader';
import Modal from './Modal/modal';


function App() {

  let [todos, setTodos] = React.useState ([]);
  const [loading, setLoading] = React.useState(true);

useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
  .then(response => response.json())
  .then(todos => 
    { setTimeout( ()=> 
      { 
        setTodos(todos)
        setLoading(false)
      } 
      ,2000 
    )}
    )
}, []
)

  function toggleTodo (id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  };

  function removeToDo (id) {
    setTodos(todos.filter(todo=>todo.id !==id));
  }

  function addTodo(title) {
   setTodos(
     todos.concat([
       {
         title,
         id : Date.now(),
         completed : false
       }]))
  }
  
  return (
    <Context.Provider value={{removeToDo}}>
    <div className="wrapper">
      <header> 
        <Header />
      </header> 
      <Modal />
      <AddToDo onCreate = {addTodo}/>
      {loading && <Loader /> }
      {
           todos.length ? (<ToDoList todos={todos} onToggle = {toggleTodo}/>)
         : ( loading ? null : <p>No todos</p>)
      }
      
    </div>
    </Context.Provider>
  );
}

export default App;

