import React, { useState } from "react";
import ToDoCard from "./components/ToDoCard";
import "./styles.css";

// Hooks Challenge

const App = () => {
	const [CurrData, setData] = useState(0);

	const Increment = () => {
		setData((prev) => {
			return prev + 1;
		});
	};
	const Decrement = () => {
		setData((prev) => {
			return prev !== 0 ? prev - 1 : 0;
		});
	};

	return (
		<>
			<div className="main_div">
				<div className="center_hooks_div">
					<br />
					<h1 className="heading">{CurrData}</h1>
					<div className="btn_div">
						<button className="buttons" onClick={Increment}>
							{" "}
							+{" "}
						</button>
						<button className="buttons" onClick={Decrement}>
							{" "}
							-{" "}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

// TODO LIST using ReactJS

const App1 = () => {
	return (
		<>
			<ToDoCard />
		</>
	);
};

export default App;
