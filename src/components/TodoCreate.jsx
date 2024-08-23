import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoCreate({ createTodo }) {
    const [title, setTitle] = useState('')

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createTodo(title)
        setTitle('')
    }

	return (
		<form onSubmit={handleSubmit} className="todo-create">
			<input type="text" name="title" id="title" placeholder="Make a Bread" value={title} onChange={handleChange} />
		</form>
	);
}

TodoCreate.propTypes = {
	createTodo: PropTypes.func.isRequired,
};
