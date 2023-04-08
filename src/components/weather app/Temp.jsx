import React, { useState, useEffect } from "react";
import "./style.css";

const Temp = () => {
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
			<div className="wrap">
				<div className="search">
					<input
						type="search"
						placeholder="search..."
						autoFocus
						id="search"
						className="searchTerm"
					/>
					<button className="searchButton" type="button">
						Search
					</button>
				</div>
			</div>

			<article className="widget">
				<div className="weatherIcon">
					<i className="wi wi-day-sunny"></i>
				</div>
				<div className="weatherInfo">
					<div className="temperature">
						<span>25.4deg;</span>
					</div>
					<div className="description">
						<div className="weatherConditon">suuny</div>
						<div className="place">Kolkata</div>
					</div>
				</div>
				<div className="date">{new Date().toLocaleString()}</div>
				<div className="extra-temp">
					<div className="temp-info-minmax">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-sunset"}></i>
							</p>
							<p className="extra-info-leftside">
								19:19 PM
								<br />
								Sunset
							</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-humidity"}></i>
							</p>
							<p className="extra-info-leftside">
								19:19 PM
								<br />
								Humidity
							</p>
						</div>
						<div className="weather-extra-info">
							<div className="two-sided-section">
								<p>
									<i className={"wi wi-rain"}></i>
								</p>
								<p className="extra-info-leftside">
									19:19 PM
									<br />
									Pressure
								</p>
							</div>
							<div className="two-sided-section">
								<p>
									<i className={"wi wi-strong-wind"}></i>
								</p>
								<p className="extra-info-leftside">
									19:19 PM
									<br />
									Speed
								</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default Temp;
