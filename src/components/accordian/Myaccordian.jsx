import React, { useState } from "react";

// Destructing the props.
const Myaccordian = ({ question, answer }) => {
	const [show, setShow] = useState(false);
	const itemEvent = () => {
		setShow(!show);
	};
	return (
		<>
			<div className="main-heading">
				<p onClick={itemEvent}>{show ? "➖" : "➕"}</p>
				<h3>{question}</h3>
			</div>
			{show && <p className="answer">{answer}</p>}
		</>
	);
};
export default Myaccordian;
