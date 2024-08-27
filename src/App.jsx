import './App.css'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
import { useContext } from 'react'
import TodoContext from './context/todo'

function App() {
  const { todos } = useContext(TodoContext)
  const { createTodo, removeTodo, changeTodo } = useContext(TodoContext)

  return (
    <main className='main'>
      <h1>React Todo <span>Streamline Your Day, the React Day!</span></h1>
      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo}  />
      <TodoCreate createTodo={createTodo} />
    </main>
  )
}

export default App
