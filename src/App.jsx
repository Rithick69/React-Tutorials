import React from "react";
import Amazon from "./components/Amazon";
import Netflix from "./components/Netflix";

// Using Ternary Operators and components to filter out rendered data.

const favSeries = "netflix";

const FavS = () => {
	return favSeries === "netflix" ? <Netflix /> : <Amazon />;
};

const App = () => (
	<>
		<h1 className="heading_style">List of top 5 Netflix shows</h1>

		<FavS />
	</>
);

export default App;
