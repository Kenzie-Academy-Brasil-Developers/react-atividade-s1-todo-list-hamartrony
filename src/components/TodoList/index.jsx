function TodoList({todos, handleTodo}){


    return(
        <>
        <ul>
            {todos.map((tarefa) => <li key={tarefa}>{tarefa}  <button className="remove" onClick={() => handleTodo(tarefa)}>Finalizar</button></li>)}
        </ul>
        
        
        </>


    )
}

export default TodoList