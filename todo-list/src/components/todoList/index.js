import { useState, useEffect } from "react";
import './index.css'

function TodoList() {
  // intializing the state
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleChange(e) {
    //it will update the inputValue when the user changes the input
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== '') {
    // it will copy the array and adds input value at last of the array
    setTodos([...todos, inputValue]);
    // when user clicks on submit button, it will clear the input box
    setInputValue("");
  }
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
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div className="flexItem">
            {" "}
            <li key={index}>
              {todo}
              </li>
              <button className='btn' onClick={() => handleDelete(index)}>Delete</button>
           
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
