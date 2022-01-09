import './App.css';
import Header from './components/header';
import ToDoList from './ToDo/ToDoList';

function App() {
  return (
    <div className="App">
      <header> 
        <Header />
      </header> 
      <ToDoList />
    </div>
  );
}

export default App;

