import React, { useState } from "react";
import "./components/note/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./components/note/Note";
import CreateNote from "./components/note/CreateNote";
import Footer from "./components/note/Footer";
import Header from "./components/note/Header";
// Notes App
const App = () => {
	const [addItem, setAddItem] = useState([]);
	// we use this props to pass the note array to note component.
	const addNote = (note) => {
		// Store the note data to array.
		setAddItem((prev) => {
			// Since addItem is an array we use [] for return.
			return [...prev, note];
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
					/>
				);
			})}
			<Footer />
		</>
	);
};

export default App;
