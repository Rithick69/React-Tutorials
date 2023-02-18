import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./Note";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";

// Notes App
const Note_App = () => {
	const [addItem, setAddItem] = useState([]);
	// we use this props to pass the note array to note component.
	const addNote = (note) => {
		// Store the note data to array.
		setAddItem((prev) => {
			// Since addItem is an array we use [] for return.
			return [...prev, note];
		});
	};
	// For Deleting a note with help of id
	const onDelete = (id) => {
		setAddItem((prev) => {
			return prev.filter((element, index) => {
				return index !== id;
			});
		});
	};
	return (
		<>
			<Header />
			{/* Passing a props for the add note event */}
			<CreateNote passNote={addNote} />
			{/* Passing addItem array data to Note component via props */}
			{addItem.map((val, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={val.title}
						content={val.content}
						deleteItem={onDelete}
					/>
				);
			})}
			<Footer />
		</>
	);
};

export default Note_App;
