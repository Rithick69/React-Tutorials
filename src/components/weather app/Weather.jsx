import React, { useEffect, useState } from "react";
import { FmdGood } from "@mui/icons-material";
import "./index.css";

const Weather = () => {
	const [data, setData] = useState(null);
	const [search, setSearch] = useState("Kolkata");

	const InputEvent = (event) => {
		const { value } = event.target;
		setSearch(value);
	};
	useEffect(() => {
		const fetchApi = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2390465be2a3f69b156f1fb4ee1c01e1`;
			const res = await fetch(url);

			if (!res.ok) {
				const message = `An error has occured: ${res.status}`;
				setData(null);
				throw new Error(message);
			}
			const resJson = await res.json();
			setData(resJson);
			//console.log(resJson.weather[0].main);
		};
		fetchApi().catch((e) => {
			console.log("Error");
		});
	}, [search]);

	const Ticon = () => {
		switch (data.weather[0].main) {
			case "Clear":
				return (
					<i className="fas fa-solid fa-sun" style={{ color: "yellow" }}></i>
				);
			case "Drizzle":
				return (
					<i
						className="fas fa-solid fa-cloud-drizzle"
						style={{ color: "white" }}
					></i>
				);
			case "Rain":
				return (
					<i
						className="fas fa-solid fa-cloud-showers-heavy"
						style={{ color: "white" }}
					></i>
				);
			case "Thunderstorm":
				return (
					<i
						className="fas fa-solid fa-cloud-bolt"
						style={{ color: "white" }}
					></i>
				);
			case "Snow":
				return (
					<i
						className="fas fa-solid fa-snowflake"
						style={{ color: "white" }}
					></i>
				);
			case "Clouds":
				return (
					<i className="fas fa-solid fa-cloud" style={{ color: "white" }}></i>
				);
			default:
				return (
					<i className="fas fa-solid fa-smog" style={{ color: "#979797" }}></i>
				);
		}
	};

	const currDate = new Date();
	const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
	const month = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	return (
		<>
			<div className="box">
				<div className="inputData">
					<input
						type="search"
						className="inputField"
						value={search}
						onChange={InputEvent}
					/>
				</div>
				{!data ? (
					<p className="errorMsg">No Data Found</p>
				) : (
					<>
						<div className="wave -one"></div>
						<div className="wave -two"></div>
						<div className="wave -three"></div>

						<div id="weathercon">
							<Ticon />
						</div>
						<p
							style={{
								textAlign: "center",
								fontSize: "2rem",
								marginTop: "-1rem",
							}}
						>
							{data.weather[0].main}
						</p>

						<div className="info">
							<h2 className="location">
								<FmdGood />
								{search}, {data.sys.country}
							</h2>
							<p id="date">
								{weekday[currDate.getDay()]} | {month[currDate.getMonth()]}{" "}
								{currDate.getDate()}, {currDate.getFullYear()}
							</p>
							<h1 className="temp">{data.main.temp}°Cel</h1>
							<h3 className="tempmin_max">
								Min: {data.main.temp_min}°Cel | Max: {data.main.temp_max}°Cel
							</h3>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Weather;
