import { useState } from "react"

function Form ({addTodo}) {
    const [tarefa, setTarefa] = useState('')



    return (
        <div className="input">
        <input placeholder="Tarefa" type='text' value={tarefa}
        onChange={(event) => setTarefa(event.target.value)}></input>

        <button className="add" type='button' onClick={() => addTodo(tarefa)}>Adicionar Tarefa</button>


        </div>
    )

}

export default Form

