import React from "react";

const TodoList = (props) => {
	return (
		<>
			<div className="todo_style">
				{/* We need to return the id of the element we want to delete */}
				<i
					className="fa fa-times"
					aria-hidden="true"
					onClick={() => {
						props.onSelect(props.id);
					}}
				/>
				{/* Props are immutable which means they can't be changed */}
				{/* We want delete event to work on App.jsx */}
				<li key={props.key} id={props.id}>
					{props.text}
				</li>
			</div>
		</>
	);
};

export default TodoList;
