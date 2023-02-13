import React, { useState } from "react";
import { questions } from "./api";
import "./accordian.css";

const Accordian = () => {
	const [data, setData] = useState(questions);
	return (
		<>
			{data.map((curr) => {
				return curr;
			})}
		</>
	);
};

export default Accordian;
