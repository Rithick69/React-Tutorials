import React, { useEffect, useState } from "react";

const CovidApp = () => {
	const [data, setData] = useState([]);
	const getCovidData = async () => {
		// Using fetch api to get response from api
		const response = await fetch(
			"https://data.covid19india.org/v4/min/data.min.json"
		);
		const result = await response.json();
		console.log("data", result.AN.total.confirmed);
		setData(result);
	};
	// After the page is rendered then only call the api data only once using useEffect.
	useEffect(() => {
		getCovidData();
	}, []);
	return (
		<>
			<div className="container-fluid mt-5">
				<div className="main-heading">
					<h1 className="mb-5 text-center">
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
							{/* {data.map((curr, index) => {
								return (
									<tr key={index}>
										<td>{curr}</td>
										<td>{curr.total.confirmed}</td>
										<td>Recovered</td>
										<td>Deaths</td>
										<td>Active</td>
										<td>Updated</td>
									</tr>
								);
							})} */}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default CovidApp;
