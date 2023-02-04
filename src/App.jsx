import React, { useState } from "react";
import "./styles.css";

// Mini project to display auto updating time in a webpage

const App = () => {
	let newTime = new Date().toLocaleTimeString();
	const [curr, setCount] = useState(newTime);
	const UpdateTime = () => {
		let currTime = new Date().toLocaleTimeString();
		setCount(currTime);
	};

	// using setInterval property to auto update time after the set waiting time.

	setInterval(UpdateTime, 1000);
	// 1000ms is 1 sec

	return (
		<>
			<h1> {curr} </h1>
		</>
	);
};

// Challenge: 6

// Display the current Time on refresh or button click using Hooks

const App2 = () => {
	let newTime = new Date().toLocaleTimeString();
	const [curr, setCount] = useState(newTime);
	const GetTime = () => {
		let currTime = new Date().toLocaleTimeString();
		setCount(currTime);
	};

	return (
		<>
			<h1> {curr} </h1>
			<button onClick={GetTime}> Click Me</button>
		</>
	);
};

// Learning React Hooks
// Created a webpage where count is displayed and increments by 1 when user
// clicks the button

const App1 = () => {
	// Hooks can only be called inside a functional component.
	//
	// const state = useState();
	// console.log(state);
	// useState is an array that return 2 items : [undefined,f]
	// "undefined" stands for state object and "f" stands for updated function
	// useState returns 2 items, Current Data, Updated function / Data
	// useState(data) here data is the initial value.
	// For these reasons useState is called hooks in react.
	//
	// Object Destruct
	const [count, setCount] = useState(0);
	// setCount is a function that will use the initial data "5" and return updated
	// value to count.
	const IncNum = () => {
		setCount(count + 1);
		//console.log("clicked", count++);
	};

	return (
		<>
			{/* In order to get the value of count dynamically we will use hooks,
			Hooks allows us to change the state of a var  i.e to be rendered.*/}

			<h1> {count} </h1>
			{/* Adding a click event */}
			<button onClick={IncNum}> Click Me</button>
		</>
	);
};

export default App;
