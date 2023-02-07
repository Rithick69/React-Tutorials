import React from "react";

const TodoList = (props) => {
	return (
		<>
			<div className="todo_style">
				<i class="fa fa-times" aria-hidden="true" />
				<li key={props.key}>{props.text}</li>;
			</div>
		</>
	);
};

export default TodoList;
