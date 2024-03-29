import React, { useState } from "react";
import "./index.css";
import { Add, Delete } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";

const Hooks_Page = () => {
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

export default Hooks_Page;
