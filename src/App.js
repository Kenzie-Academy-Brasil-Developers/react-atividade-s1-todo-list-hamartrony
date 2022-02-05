import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(newTodo){              // adiciona tarefa na lista
    setTodos  ([...todos, newTodo])
  }

  function handleTodo(item){              // remove tarefa da lista
    const filtrado = todos.filter(tarefa => tarefa !== item )
    setTodos(filtrado)
  }



  

    

 


 



  return (
    <div className="App">
      <header className="App-header">
   
       <Form addTodo={addTodo}/>
       <TodoList todos={todos} handleTodo={handleTodo}/>

      

      </header>
    </div>
  );
}

export default App;
