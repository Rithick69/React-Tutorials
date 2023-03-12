import React, { useEffect, useState } from "react";
import { Cloud } from "@material-ui/icons";
import "./index.css";

const Weather = () => {
	const [data, setData] = useState(null);
	const [search, setSearch] = useState(null);

	const InputEvent = (event) => {
		const { value } = event.target;
		setSearch(value);
	};
	useEffect(() => {
		const fetchApi = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2390465be2a3f69b156f1fb4ee1c01e1`;
			const res = await fetch(url);
			const resJson = await res.json();
			setData(resJson);
			console.log(resJson);
		};
		fetchApi();
	}, []);
	return (
		<>
			<div className="box">
				<div className="inputData">
					<input type="search" className="inputField" onChange={InputEvent} />
				</div>
				{!data ? (
					<p>No Data Found</p>
				) : (
					<>
						<div className="info">
							<h2 className="location">
								<Cloud /> {search}
							</h2>
							<h1 className="temp">{data.main.temp}</h1>
							<h3 className="tempmin_max">Min: 5.25°Cel | Max: 5.25°Cel</h3>
						</div>
						<div className="wave -one"></div>
						<div className="wave -two"></div>
						<div className="wave -three"></div>
					</>
				)}
			</div>
		</>
	);
};

export default Weather;
