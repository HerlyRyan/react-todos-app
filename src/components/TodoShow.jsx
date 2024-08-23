import { useState } from "react";
import TodoEdit from "./TodoEdit";
import PropTypes from "prop-types";
import DeleteIcon from "../image/delete.svg"
import EditIcon from "../image/edit.svg"

export default function TodoShow({ todo, removeTodo, changeTodo }) {
	const [showEdit, setShowEdit] = useState(false);

	function handleDelete() {
		removeTodo(todo.id);
	}

	function handleEdit() {
		setShowEdit(true);
	}

	function handleDoubleClick() {
		changeTodo(todo.id, todo.title, !todo.completed);
	}

	function handleSubmit(id, title) {
		changeTodo(id, title);
		setShowEdit(false);
	}

	if (showEdit) {
		return <TodoEdit todo={todo} onSubmit={handleSubmit} />;
	}

	return (
		<li className="todo" onDoubleClick={handleDoubleClick}>
			<p className={todo.completed && "completed"}>{todo.title}</p>

			<div className="actions">
				<button type="button" onClick={handleDelete}>
					<img src={DeleteIcon} alt="delete icon" title="Delete" />
				</button>
				<button type="button" onClick={handleEdit}>
					<img src={EditIcon} alt="edit icon" title="Edit" />
				</button>
			</div>
		</li>
	);
}


TodoShow.propTypes = {
    todo: PropTypes.any.isRequired,
    removeTodo: PropTypes.func.isRequired,
    changeTodo: PropTypes.func.isRequired
}