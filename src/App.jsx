import './App.css'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  function createTodo(title) {
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  function changeTodo(id, title, completed = false) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, title, completed}
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <main className='main'>
      <h1>React Todo <span>Streamline Your Day, the React Day!</span></h1>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo}  />
      <TodoCreate createTodo={createTodo} />
    </main>
  )
}

export default App
