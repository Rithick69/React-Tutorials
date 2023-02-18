import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const CreateNote = (props) => {
	// To expand and contract the input field.
	const [expand, setExpand] = useState(false);
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	// Populate the input field and textarea using onChange event.
	const InputEvent = (event) => {
		const { value, name } = event.target;
		setNote((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	// We need to pass the event to the main App component
	// to be passed further to the Note component.
	const addEvent = () => {
		// we call props passnote through here.
		// send the note data to app component.
		props.passNote(note);
		// Auto clearing the input field and textarea after click call
		setNote({
			title: "",
			content: "",
		});
		setExpand(false);
	};
	const expandIt = () => {
		setExpand(true);
	};
	const normal = () => {
		setExpand(false);
	};

	return (
		<>
			<div className="main_notes" onDoubleClick={normal}>
				<form>
					{/* If expand is true then show title else show only textarea */}
					{expand ? (
						<input
							type="text"
							name="title"
							value={note.title}
							onChange={InputEvent}
							placeholder="Title"
							autoComplete="off"
						/>
					) : null}
					<textarea
						rows=""
						column=""
						name="content"
						value={note.content}
						onChange={InputEvent}
						placeholder="Write a note ..."
						onClick={expandIt}
					></textarea>

					{/* We need to add each note to an array after click of add button */}
					{expand ? (
						<Button onClick={addEvent}>
							<Add className="plus_sign" />
						</Button>
					) : null}
				</form>
			</div>
		</>
	);
};
export default CreateNote;
