import React from "react";
import { DeleteOutline } from "@material-ui/icons";

const Note = () => {
	return (
		<>
			<div className="note">
				<h1>title</h1>
				<br />
				<p>this is the content</p>
				<button className="btn">
					<DeleteOutline className="deleteIcon" />
				</button>
			</div>
		</>
	);
};
export default Note;
