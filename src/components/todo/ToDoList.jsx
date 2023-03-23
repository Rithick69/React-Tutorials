import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const TodoList = (props) => {
	// const [line, setLine] = useState(false);

	// Line through style
	// const cutIt = () => {
	// 	setLine(true);
	// };
	return (
		<>
			<div className="todo_style">
				{/* We need to return the id of the element we want to delete */}
				<Tooltip title="Delete">
					<Delete
						className="fa fa-times"
						onClick={() => {
							props.onSelect(props.id, "delete");
						}}
					/>
					{/* For Cut it
					oncClick={cutIt} */}
					{/* For Deleting
					onClick={() => {
							props.onSelect(props.id);
						}}
					 */}
				</Tooltip>
				{/* Props are immutable which means they can't be changed */}
				{/* We want delete event to work on App.jsx */}
				{/* style={{ textDecoration: line ? "line-through" : "none" }} */}
				<div className="list_style">
					<li key={props.key} id={props.id}>
						{props.text}
					</li>
					<Tooltip title="Edit">
						<Edit
							className="fa fa-times2"
							onClick={() => {
								props.onSelect(props.id, "edit");
							}}
						/>
					</Tooltip>
				</div>
			</div>
		</>
	);
};

export default TodoList;
