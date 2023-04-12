import React, { useEffect, useState } from "react";

const WeatherCard = ({ weatherData }) => {
	const [weatherIcons, setWeatherIcons] = useState("");
	console.log(weatherData);
	const {
		temp,
		humidity,
		pressure,
		weathermood,
		name,
		country,
		sunset,
		speed,
	} = weatherData;
	console.log(weatherData.temp);

	useEffect(() => {
		if (weathermood) {
			switch (weathermood) {
				case "Clear":
					setWeatherIcons("wi-day-sunny");
					break;
				case "Drizzle":
					setWeatherIcons("wi-showers");
					break;
				case "Rain":
					setWeatherIcons("wi-rain");
					break;
				case "Thunderstorm":
					setWeatherIcons("wi-thunderstorm");
					break;
				case "Snow":
					setWeatherIcons("wi-snowflake-cold");
					break;
				case "Clouds":
					setWeatherIcons("wi-cloudy");
					break;
				default:
					setWeatherIcons("wi-dust");
					break;
			}
		}
	}, [weathermood]);

	// const currDate = new Date();
	// const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
	// const month = [
	// 	"Jan",
	// 	"Feb",
	// 	"Mar",
	// 	"Apr",
	// 	"May",
	// 	"Jun",
	// 	"Jul",
	// 	"Aug",
	// 	"Sept",
	// 	"Oct",
	// 	"Nov",
	// 	"Dec",
	// ];

	let sec = sunset;
	let date = new Date(sec * 1000);
	let timeStr = `${date.getHours()}:${date.getMinutes()}`;
	return (
		<>
			<article className="widget">
				<div className="weatherIcon">
					<i className={`wi ${weatherIcons}`}></i>
				</div>
				<div className="weatherInfo">
					<div className="temperature">
						<span>{temp}°Cel</span>
					</div>
					<div className="description">
						<div className="weatherConditon">{weathermood}</div>
						<div className="place">
							{name}, {country}
						</div>
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
								{timeStr}
								<br />
								Sunset
							</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-humidity"}></i>
							</p>
							<p className="extra-info-leftside">
								{humidity}
								<br />
								Humidity
							</p>
						</div>
					</div>
					<div className="weather-extra-info">
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-rain"}></i>
							</p>
							<p className="extra-info-leftside">
								{pressure}
								<br />
								Pressure
							</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-strong-wind"}></i>
							</p>
							<p className="extra-info-leftside">
								{speed}
								<br />
								Speed
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default WeatherCard;
