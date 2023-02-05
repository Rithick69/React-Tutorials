import React, { useState } from "react";
import "./styles.css";

// Handling Events

const App = () => {
	// Always use useState outside a function as a functional component
	const purple = "#8e44ad";
	const [bg, setBg] = useState(purple);
	const [name, setName] = useState("Click Me");
	const bgChange = () => {
		let newBg = "#34495e";
		setBg(newBg);
		setName("Ouch! 😱");
	};
	const bgBack = () => {
		setBg(purple);
		setName("Heyy!! 😠");
	};
	return (
		<>
			<div style={{ backgroundColor: bg }}>
				{/* Events are written in camelCase */}
				{/* onDoubleClick event for double click events calls */}
				<button onMouseEnter={bgChange} onMouseLeave={bgBack}>
					{name}
				</button>
			</div>
		</>
	);
};

export default App;
