import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {
	const [data, setData] = useState(null);
	const [search, setSearch] = useState("Kolkata");

	const InputEvent = (event) => {
		const { value } = event.target;
		setSearch(value);
	};

	const SearchEvent = async () => {
		try {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2390465be2a3f69b156f1fb4ee1c01e1`;
			const res = await fetch(url);

			if (!res.ok) {
				const message = `An error has occured: ${res.status}`;
				setData(null);
				throw new Error(message);
			}
			const resJson = await res.json();
			const { temp, humidity, pressure } = resJson.main;
			const { main: weathermood } = resJson.weather[0];
			const { name } = resJson;
			const { speed } = resJson.wind;
			const { country, sunset } = resJson.sys;

			const weatherData = {
				temp,
				humidity,
				pressure,
				weathermood,
				name,
				speed,
				country,
				sunset,
			};
			setData(weatherData);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		SearchEvent();
	}, [search]);

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
						value={search}
						onChange={InputEvent}
					/>
					<button className="searchButton" type="button" onClick={SearchEvent}>
						Search
					</button>
				</div>
			</div>
			<WeatherCard weatherData={data} />
		</>
	);
};

export default Temp;
