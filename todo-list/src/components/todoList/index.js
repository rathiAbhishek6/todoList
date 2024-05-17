import { useState } from 'react'

function TodoList () {
  // intializing the state
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  //it will update the inputValue when the user changes the input
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
 // it will copy the array and adds input value at last of the array
  setTodos([...todos, inputValue])
  // when user clicks on submit button, it will clear the input box
  setInputValue('')
}

function handleDelete(index) {
  //  filter to create a new array excluding the todo at the specified index
  const updatedTodos = todos.filter((_, i) => i !== index);
  // Update the todos state with the new array
  setTodos(updatedTodos);
}
  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
