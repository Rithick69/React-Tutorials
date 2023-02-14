import React, { useState } from "react";
import { questions } from "./api";
import "./accordian.css";
import Myaccordian from "./Myaccordian";

const Accordian = () => {
	const [data, setData] = useState(questions);
	return (
		<>
			<section className="main-div">
				<h1> React Questions</h1>
				{data.map((curr) => {
					const { id } = curr;
					return <Myaccordian key={id} {...curr} />;
				})}
			</section>
		</>
	);
};

export default Accordian;
