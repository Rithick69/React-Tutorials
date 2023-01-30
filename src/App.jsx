import React from "react";
import { add, sub, div, mul } from "./components/Calc";

//Calculator

function App() {
	return (
		<>
			<ul>
				<li>Sum of two no is: {add(40, 4)}</li>
				<li>Sub of two no is: {sub(30, 4)}</li>
				<li>Div of two no is: {div(10, 3)}</li>
				<li>Mult of two no is: {mul(10, 4)}</li>
			</ul>
		</>
	);
}

export default App;
