import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import { Tooltip } from "@mui/core";

const TodoList = (props) => {
	const [line, setLine] = useState(false);

	const cutIt = () => {
		setLine(true);
	};
	return (
		<>
			<div className="todo_style">
				{/* We need to return the id of the element we want to delete */}
				<Tooltip title="Delete">
					<Delete className="fa fa-times" onClick={cutIt} />
					{/* For Deleting
					onClick={() => {
							props.onSelect(props.id);
						}}
					 */}
				</Tooltip>
				{/* Props are immutable which means they can't be changed */}
				{/* We want delete event to work on App.jsx */}
				<li
					style={{ textDecoration: line ? "line-through" : "none" }}
					key={props.key}
					id={props.id}
				>
					{props.text}
				</li>
			</div>
		</>
	);
};

export default TodoList;
