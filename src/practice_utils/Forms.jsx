import React, { useState } from "react";
import "./styles.css";

// Reducing the Lines of Code using Spread Operators

const App = () => {
	const [fullName, setFullName] = useState({
		fname: "",
		lname: "",
		email: "",
		mobile: "",
	});

	const inputEvent = (event) => {
		const { value, name } = event.target;
		setFullName((prev) => {
			return {
				...prev,
				// Updating prev using "[name] : data" operation
				[name]: value,

				// Output prev:
				//  [
				// 	{ "name": "State",
				//    "value": {"fname": "","lname": "","email": "","mobile": ""}
				// 	}
				//  ]

				// Output after populating name:
				//  [
				// 	{ "name": "State",
				// 	  "value": {"fname": "Rithick","lname": "Chowdhury","email": "rithick@gmail.com","mobile": "323232"}
				// 	}
				//  ]
			};
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		alert("submit");
	};
	return (
		<>
			<div className="main_div">
				<h1>
					Hello {fullName.fname} {fullName.lname}
				</h1>
				<br />
				<p style={{ background: "transparent" }}>{fullName.email}</p>
				<p style={{ background: "transparent" }}>{fullName.mobile}</p>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="Enter Your First Name"
						name="fname"
						onChange={inputEvent}
						value={fullName.fname}
					/>
					<input
						type="text"
						placeholder="Enter Your Last Name"
						name="lname"
						onChange={inputEvent}
						value={fullName.lname}
					/>
					<input
						type="email"
						placeholder="Enter Your Email Address"
						name="email"
						autoComplete="off"
						onChange={inputEvent}
						value={fullName.email}
					/>
					<input
						type="number"
						placeholder="Enter Your Mobile Number"
						name="mobile"
						onChange={inputEvent}
						value={fullName.mobile}
					/>
					<br />
					<button type="submit">Click Me</button>
				</form>
			</div>
		</>
	);
};

// Handling Complex Multiple Input Form States and simplify the code

const App3 = () => {
	// useState can also return objects
	const [fullName, setFullName] = useState({
		fname: "",
		lname: "",
		email: "",
		mobile: "",
	});

	const inputEvent = (event) => {
		// console.log(event.target.value);
		console.log(event.target.name);

		// const val = event.target.value;
		// const name = event.target.name;

		const { value, name } = event.target;

		// we can get the previous state of useState variable

		setFullName((prev) => {
			if (name === "fname") {
				return {
					fname: value,
					lname: prev.lname,
					email: prev.email,
					mobile: prev.mobile,
				};
			} else if (name === "lname") {
				return {
					fname: prev.fname,
					lname: value,
					email: prev.email,
					mobile: prev.mobile,
				};
			} else if (name === "email") {
				return {
					fname: prev.fname,
					lname: prev.lname,
					email: value,
					mobile: prev.mobile,
				};
			} else {
				return {
					fname: prev.fname,
					lname: prev.lname,
					email: prev.email,
					mobile: value,
				};
			}
		});

		//setFullName(event.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		alert("submit");
	};
	return (
		<>
			<div className="main_div">
				<h1>
					Hello {fullName.fname} {fullName.lname}
				</h1>
				<br />
				<p style={{ background: "transparent" }}>{fullName.email}</p>
				<p style={{ background: "transparent" }}>{fullName.mobile}</p>
				{/* While using forms we can use form properties like onSubmit etc
				to call functions and not rely on custom button events*/}
				<form onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="Enter Your First Name"
						name="fname"
						onChange={inputEvent}
						value={fullName.fname}
					/>
					<input
						type="text"
						placeholder="Enter Your Last Name"
						name="lname"
						onChange={inputEvent}
						value={fullName.lname}
					/>
					<input
						type="email"
						placeholder="Enter Your Email Address"
						name="email"
						autoComplete="off"
						onChange={inputEvent}
						value={fullName.email}
					/>
					<input
						type="number"
						placeholder="Enter Your Mobile Number"
						name="mobile"
						onChange={inputEvent}
						value={fullName.mobile}
					/>
					<br />
					<button type="submit">Click Me</button>
				</form>
			</div>
		</>
	);
};

// Handling forms

const App2 = () => {
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [fullName, setFullName] = useState();
	const inputFEvent = (event) => {
		setFName(event.target.value);
	};
	const inputLEvent = (event) => {
		setLName(event.target.value);
	};
	const nameEvent = (e) => {
		e.preventDefault();
		setFullName(fname + " " + lname);
	};
	return (
		<>
			<div className="main_div">
				<h1>Hello {fullName}</h1>
				{/* While using forms we can use form properties like onSubmit etc
				to call functions and not rely on custom button events*/}
				<form onSubmit={nameEvent}>
					<input
						type="text"
						placeholder="Enter Your First Name"
						onChange={inputFEvent}
						value={fname}
					/>
					<input
						type="text"
						placeholder="Enter Your Last Name"
						onChange={inputLEvent}
						value={lname}
					/>
					<br />
					<button type="submit">Click Me</button>
				</form>
			</div>
		</>
	);
};

// Handling Input Events

const App1 = () => {
	const [name, setName] = useState("");
	const [fullName, setFullName] = useState();
	// every function called by an event passes an object as argument.
	const inputEvent = (event) => {
		//console.log(event.target.value);
		setName(event.target.value);
	};
	const nameEvent = () => {
		setFullName(name);
	};
	return (
		<>
			<div style={{ backgroundColor: "#8e44ad" }}>
				<h1>Hello {fullName}</h1>
				{/* value property of input field if absent react understands that the 
        input has read/write access */}
				{/* if values="" for react it is read only.. we can't write anything inside the input */}
				{/* defaultvalue property can be used as a way to set the default value of the input field */}
				{/* onChange is an example of React controlled component */}
				<input
					type="text"
					placeholder="Enter Your Name"
					onChange={inputEvent}
					value={name}
				/>
				<button onClick={nameEvent}>Click Me</button>
			</div>
		</>
	);
};

export default App;
