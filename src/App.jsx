import React from "react";
import "./components/note/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./components/note/Note";
import CreateNote from "./components/note/CreateNote";
import Footer from "./components/note/Footer";
import Header from "./components/note/Header";
// Notes App
const App = () => {
	return (
		<>
			{/* Header Component */}
			<Header />
			{/* CreateNote Component */}
			<CreateNote />

			{/* Note Component */}
			<Note />
			{/* Footer Component */}
			<Footer />
		</>
	);
};

export default App;
