import { createContext, useState } from "react";
import PropTypes from "prop-types"

const TodoContext = createContext();

export function Provider({ children }) {
	const [todos, setTodos] = useState([]);

	function createTodo(title) {
		const newTodo = {
			id: crypto.randomUUID(),
			title: title,
			completed: false,
		};
		const updatedTodos = [...todos, newTodo];
		setTodos(updatedTodos);
	}

	function removeTodo(id) {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	}

	function changeTodo(id, title, completed = false) {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, title, completed };
			}
			return todo;
		});

		setTodos(updatedTodos);
	}

    const shared = { todos, createTodo, removeTodo, changeTodo }

    return (
        <TodoContext.Provider value={shared}>{children}</TodoContext.Provider>
    )
}

export default TodoContext;

Provider.propTypes = {
    children: PropTypes.any.isRequired
}