import React, { useEffect, useState } from "react";
import {
	Cloud,
	AcUnitIcon,
	ThunderstormIcon,
	UmbrellaIcon,
	FilterDramaIcon,
	GrainIcon,
} from "@material-ui/icons";
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
			const resJson = await res.json();
			setData(resJson);
			console.log(resJson.weather[0].main);
		};
		fetchApi();
	}, [search]);
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
						<div className="info">
							<h2 className="location">
								{/* {{
									if(data.weather[0].main == 'Clear'){<FilterDramaIcon />}
								else if(data.weather[0].main == 'Rain'){<UmbrellaIcon />}
								else if(data.weather[0].main == 'thunderstorm')
								{<ThunderstormIcon />}
								else if(data.weather[0].main == 'Snow'){<AcUnitIcon />}
								else if(data.weather[0].main == 'Mist'){<GrainIcon />}
								else {<Cloud />}}} */}
								{/* {data.desc = "normal"} */}
								<Cloud />
								{search}
							</h2>
							<h1 className="temp">{data.main.temp}°Cel</h1>
							<h3 className="tempmin_max">
								Min: {data.main.temp_min}°Cel | Max: {data.main.temp_max}°Cel
							</h3>
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
