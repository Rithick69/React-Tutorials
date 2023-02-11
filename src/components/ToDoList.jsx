import React from "react";
import { Delete } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

const TodoList = (props) => {
	return (
		<>
			<div className="todo_style">
				{/* We need to return the id of the element we want to delete */}
				<Tooltip title="Delete">
					<Delete
						className="fa fa-times btn_red"
						onClick={() => {
							props.onSelect(props.id);
						}}
					/>
				</Tooltip>
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
