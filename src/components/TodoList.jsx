import PropTypes from "prop-types"
import TodoShow from "./TodoShow"

export default function TodoList({todos, removeTodo, changeTodo}) {
    const renderedTodos = todos.map((todo) => {
        return (
            <TodoShow key={todo.id} todo={todo} removeTodo={removeTodo} changeTodo={changeTodo}/>
        )
    })

    return (
       <ul className="todo-list">{renderedTodos}</ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
    changeTodo: PropTypes.func.isRequired
}