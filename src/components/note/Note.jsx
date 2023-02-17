import React from "react";
import { DeleteOutline } from "@material-ui/icons";

const Note = (props) => {
	return (
		<>
			<div className="note">
				<h1>{props.title}</h1>
				<br />
				<p>{props.content}</p>
				<button className="btn">
					<DeleteOutline className="deleteIcon" />
				</button>
			</div>
		</>
	);
};
export default Note;
