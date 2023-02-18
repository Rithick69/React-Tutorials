import React from "react";
import { DeleteOutline } from "@material-ui/icons";

const Note = (props) => {
	// Calling the deleteItem function in App component
	const deleteNote = () => {
		props.deleteItem(props.id);
	};
	return (
		<>
			<div className="note">
				<h1>{props.title}</h1>
				<br />
				<p>{props.content}</p>
				<button className="btn" onClick={deleteNote}>
					<DeleteOutline className="deleteIcon" />
				</button>
			</div>
		</>
	);
};
export default Note;
