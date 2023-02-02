import React from "react";
import Cards from "./components/Cards";
import Sdata from "./components/Sdata";

// Filtering rendered data using if and else

const favSeries = "Dark";

const FavS = () => {
	if (favSeries === "Dark") {
		return (
			<Cards
				key={Sdata[1].id}
				imgsrc={Sdata[1].imgsrc}
				title={Sdata[1].title}
				sname={Sdata[1].sname}
				link={Sdata[1].link}
			/>
		);
	} else {
		return (
			<Cards
				key={Sdata[0].id}
				imgsrc={Sdata[0].imgsrc}
				title={Sdata[0].title}
				sname={Sdata[0].sname}
				link={Sdata[0].link}
			/>
		);
	}
};

const App = () => (
	<>
		<h1 className="heading_style">List of top 5 Netflix shows</h1>

		<FavS />
	</>
);

export default App;
