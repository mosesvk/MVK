import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])


  const addTodoHandler = () => {
    // todos = []
  }

  return (
    <>
      {/* {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))} */}
      {/* <input type='text'>  */}
      <button onClick={addTodoHandler}>Add</button>
    </>

  )
}

export default App;
