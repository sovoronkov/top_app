import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import ToDoList from './ToDo/ToDoList';
import ToDoItem from './ToDo/ToDoItem';

function App() {

  const todos = [
    {id:1, completed: false, title: 'Купить хлеба'},
    {id:2, completed: false, title: 'Купить масло'},
    {id:3, completed: false, title: 'Купить молоко'},
  ]
  
  return (
    <div className="App">
      <header> 
        <Header />
      </header> 
     <ToDoList todos={ todos }/>
    </div>
  );
}

export default App;

