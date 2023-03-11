import React, { useState } from "react";
import { Cloud } from "@material-ui/icons";
import "./index.css";

const Weather = () => {
	const [data, setData] = useState();

	const InputEvent = (event) => {
		const { value } = event.target;
		setData(value);
	};
	return (
		<>
			<div className="box">
				<div className="inputData">
					<input
						type="search"
						className="inputField"
						value={data}
						onChange={InputEvent}
					/>
				</div>
				<div className="info">
					<h2 className="location">
						<Cloud />
					</h2>
					<h1 className="temp">5.25°Cel</h1>
					<h3 className="tempmin_max">Min: 5.25°Cel | Max: 5.25°Cel</h3>
				</div>
				<div className="wave -one"></div>
				<div className="wave -two"></div>
				<div className="wave -three"></div>
			</div>
		</>
	);
};

export default Weather;
