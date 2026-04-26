import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const remaining = todos.filter(t => !t.completed).length

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="input-row">
        <input
          placeholder="Add a new todo"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>
              {todo.text}
            </span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <p>{remaining} items left</p>
    </div>
  )
}

export default App
