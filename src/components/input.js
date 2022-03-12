import React, { useState, useRef } from 'react';
import './input.css'

function Input() {
    const [Todos,setTodos] = useState([])
    const inputRef = useRef('')
       const addToDo = () => {
       setTodos([...Todos, inputRef.current.value])
       inputRef.current.value = ''

   }

    return (
        <div className='container'>
            <h1 id='title'> To-do-List </h1>
            <div className='input-container'>
                <input  ref={inputRef}  type="text" required /> 
                <button onClick={addToDo}> Add </button>
            </div>
            <ul>
                {Todos.map(todos => (
                   <li> {todos} </li>
                ))}
            </ul>
        </div>
);
}
export default Input    
