import React from "react";

const WeatherCard = ({ weatherData }) => {
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
	const Ticon = () => {
		switch (weathermood) {
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
			<article className="widget">
				<div className="weatherIcon">
					<i className="wi wi-day-sunny"></i>
				</div>
				<div className="weatherInfo">
					<div className="temperature">
						<span>{temp}</span>
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
								19:19 PM
								<br />
								{sunset}
							</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={"wi wi-humidity"}></i>
							</p>
							<p className="extra-info-leftside">
								19:19 PM
								<br />
								{humidity}
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
									{pressure}
								</p>
							</div>
							<div className="two-sided-section">
								<p>
									<i className={"wi wi-strong-wind"}></i>
								</p>
								<p className="extra-info-leftside">
									19:19 PM
									<br />
									{speed}
								</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default WeatherCard;
