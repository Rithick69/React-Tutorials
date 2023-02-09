import React, { useState } from "react";
import "./styles.css";
import TodoCard from "./components/ToDoCard";
import { Add, Delete } from "@material-ui/icons";
import { Button, Tooltip } from "@material-ui/core";

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
						<Tooltip title="Increment">
							<Button className="buttons btn_green" onClick={Increment}>
								{/* Material UI Component */}
								<Add />
							</Button>
						</Tooltip>
						<Tooltip title="Decrement">
							<Button className="buttons btn_red" onClick={Decrement}>
								<Delete />
							</Button>
						</Tooltip>
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
			<TodoCard />
		</>
	);
};

export default App;
