import React from "react";
import Cards from "./components/Cards";
import Sdata from "./components/Sdata";

// 3. {/* Using fat arrow function */}

function App() {
	return (
		<>
			<h1 className="heading_style">List of top 5 Netflix shows</h1>
			{/* Map method and Fat arrow function, letting us aviod
		 	the need to write the card component multiple times. */}

			{Sdata.map((val) => {
				return (
					<Cards
						imgsrc={val.imgsrc}
						title={val.title}
						sname={val.sname}
						link={val.link}
					/>
				);
			})}
		</>
	);
}

// 2. using traditional function and map function so we don't have to write each card seperately
// array.map(val,index,arrayname)
// function ncard(val) {
// 	return (
// 		<Cards
// 			imgsrc={val.imgsrc}
// 			title={val.title}
// 			sname={val.sname}
// 			link={val.link}
// 		/>
// 	);
// }

// function App() {
// 	return (
// 		<>
// 			<h1 className="heading_style">List of top 5 Netflix shows</h1>
// 			{/* Map method and Fat arrow function, letting us aviod
// 		 	the need to write the card component multiple times. */}

// 			{Sdata.map(ncard)}
// 		</>
// 	);
// }

// 1. Importing each data seperately and using them in props.

// function App() {
// 	return (
// 		<>
// 			{/* Making my custom properties and passing values in the component.
// 			Note: if we pass className as props in component it won't act like a css class
// 			and will become just another custom value passing a string value this is because className can only
// 			work inside jsx elements not as props of the importes component. It is always advisable to avoid
// 			usage of predefined attribute names.
// 			*/}
// 			<h1 className="heading_style">List of top 5 Netflix shows</h1>
// 			<Cards
// 				imgsrc={Sdata[0].imgsrc}
// 				title={Sdata[0].title}
// 				sname={Sdata[0].sname}
// 				link={Sdata[0].link}
// 			/>
// 			<Cards
// 				imgsrc={Sdata[1].imgsrc}
// 				title={Sdata[1].title}
// 				sname={Sdata[1].sname}
// 				link={Sdata[1].link}
// 			/>
// 			<Cards
// 				imgsrc={Sdata[2].imgsrc}
// 				title={Sdata[2].title}
// 				sname={Sdata[2].sname}
// 				link={Sdata[2].link}
// 			/>
// 			<Cards
// 				imgsrc={Sdata[3].imgsrc}
// 				title={Sdata[3].title}
// 				sname={Sdata[3].sname}
// 				link={Sdata[3].link}
// 			/>
// 			<Cards
// 				imgsrc={Sdata[4].imgsrc}
// 				title={Sdata[4].title}
// 				sname={Sdata[4].sname}
// 				link={Sdata[4].link}
// 			/>
// 		</>
// 	);
// }
export default App;
