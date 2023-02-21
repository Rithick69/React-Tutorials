import React, { useEffect, useState } from "react";

// useEffect hooks
// After rendering we tell the component what to do using useEffect hooks.
// React remembers the function we passed and call them after DOM is rendered.
// useEffect is the alternative for react lifestyle methods such as componentDidMount,
// componentDidUpdate, componentWillUnmount.

const Effect1 = () => {
	const [num, setNum] = useState(0);
	const [nums, setNums] = useState(0);
	const Incre = () => {
		setNum(num + 1);
	};
	const Increm = () => {
		setNums(nums + 1);
	};

	// useEffect always expects a function.
	// it is called everytime render method is called.
	useEffect(() => {
		// console.log("I am clicked");
	});

	// but if we have two buttons and we want to console when only button 1 is clicked
	// would the above way of using useEffect work?
	// Answer is no, because the above method gets called regardless of which button is clicked.

	// Inorder to call useEffect only on page refresh we can pass an empty array with it.

	useEffect(() => {
		console.log("I am clicked");
	}, []);

	// Inorder to call useEffect only when a particular button is clicked we can do that like this:
	// We pass the name of the currData of the useState of that button with useEffect.

	useEffect(() => {
		console.log("I am clicked");
	}, [num]);
	// Now, msg will be consoled only when btn1 is clicked and not when btn2 is clicked.

	return (
		<>
			<h1>
				Rithick Chowdhury {num} {nums}
			</h1>
			<button className="btn btn-success" onClick={Incre}>
				Click Me 1
			</button>
			<br />
			<br />

			<button className="btn btn-danger" onClick={Increm}>
				Click Me 2
			</button>
		</>
	);
};

// useEffect Challenge
// Display the number of time user clicks on a button on the title of the page

const Effect = () => {
	const [n, setN] = useState(0);
	const titleincre = () => {
		setN(n + 1);
	};
	useEffect(() => {
		document.title = `you clicked me ${n}`;
	}, [n]);
	return (
		<button className="btn btn-success" onClick={titleincre}>
			Click Me {n}
		</button>
	);
};

export default Effect;
