import React, { useEffect, useState } from "react";
import "./index.css";

const CovidApp = () => {
	const [data, setData] = useState([]);
	const getCovidData = async () => {
		// Using fetch api to get response from api
		const response = await fetch(
			"https://api.rootnet.in/covid19-in/stats/latest"
		);
		const result = await response.json();
		// console.log("data", result.data.regional);
		setData(result.data.regional);
	};
	// After the page is rendered then only call the api data only once using useEffect.
	useEffect(() => {
		getCovidData();
	}, []);
	return (
		<>
			<div className="container-fluid mt-5">
				<div className="main-heading">
					<h1 className="mb-3 text-center">
						<span className="font-weight-bold">INDIA</span> COVID-19 Dashboard
					</h1>
				</div>
				<div className="table-responsive">
					<table className="table table-hover">
						<thead className="thead-dark">
							<tr>
								<th>State</th>
								<th>Confirmed</th>
								<th>Recovered</th>
								<th>Deaths</th>
								<th>Active</th>
								<th>Updated</th>
							</tr>
						</thead>
						<tbody>
							{data.map((curr, index) => {
								return (
									<tr key={index}>
										<td>{curr.loc}</td>
										<td>{curr.totalConfirmed}</td>
										<td>{curr.discharged}</td>
										<td>{curr.deaths}</td>
										<td>
											{curr.totalConfirmed - curr.discharged - curr.deaths}
										</td>
										<td>14/05/2022 03:47:21</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default CovidApp;
