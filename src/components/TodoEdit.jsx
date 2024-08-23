import { useState } from "react";
import PropTypes from "prop-types"
import CheckIcon from "../image/check.svg"

export default function TodoEdit({ todo, onSubmit }) {
	const [title, setTitle] = useState(todo.title);

	function handleChange(e) {
		setTitle(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		onSubmit(todo.id, title);
	}

	return (
		<form className="todo-edit">
			<input
				type="text"
				name="title"
				id="title"
				placeholder="Make a Bread"
				value={title}
				onChange={handleChange}
			/>
            <button type="submit" onClick={handleSubmit}>
                <img src={CheckIcon} alt="save changes" title="Save"/>
            </button>
		</form>
	);
}


TodoEdit.propTypes = {
	todo: PropTypes.any.isRequired,
	onSubmit: PropTypes.func.isRequired
}