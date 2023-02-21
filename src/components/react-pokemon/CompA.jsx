import React, { useEffect, useState } from "react";
import axios from "axios";

// Consuming the pokemon api using Axios and useEffect

const CompA = () => {
	const [num, setNum] = useState();
	const [name, setName] = useState();
	const [moves, setMoves] = useState();

	// We want to show the pokemon data after we choose an option from select.
	// we will be using useEffect for that.
	useEffect(() => {
		// axios call
		async function getData() {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
			// console.log(res.data.moves[0]);
			setName(res.data.name);
			setMoves(res.data.moves[0].move.name);
		}

		getData();
	});

	return (
		<>
			<h1>
				You choose <span style={{ color: "red" }}> {num} </span> value
			</h1>
			<h1>
				My name is <span style={{ color: "yellow" }}> {name} </span>
			</h1>
			<h1>
				I have <span style={{ color: "blue" }}> {moves} </span> moves
			</h1>
			{/* OnChange event sets the value of 'num' when event is called using setNum. */}
			{/* select-value displays the modified num value after event call. */}
			<select
				value={num}
				onChange={(event) => {
					setNum(event.target.value);
				}}
			>
				<option value="1">1</option>
				<option value="25">25</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
		</>
	);
};

export default CompA;
