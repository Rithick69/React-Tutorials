import React from "react";
import Cards from "./components/Cards";
import Sdata from "./components/Sdata";

// Handling warning given by ReactJS that says that each card must have a unique "key" prop
// the name of the unique prop must be "key"
// "key" acts like id of the element

const App = () => (
	<>
		<h1 className="heading_style">List of top 5 Netflix shows</h1>
		{Sdata.map((val) => {
			return (
				<Cards
					key={val.id}
					imgsrc={val.imgsrc}
					title={val.title}
					sname={val.sname}
					link={val.link}
				/>
			);
		})}
	</>
);

export default App;
