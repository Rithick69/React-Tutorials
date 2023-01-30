import React from "react";
import Cards from "./components/Cards";

function App() {
	return (
		<>
			{/* Making my custom properties and passing values in the component */}
			<Cards
				imgsrc="Image1"
				title="A Netflix Original Series"
				sname="Dark"
				link="link1"
			/>
			<Cards
				imgsrc="Image2"
				title="A Netflix Original Series"
				sname="Friends"
				link="link2"
			/>
			<Cards
				imgsrc="Image3"
				title="A Netflix Original Series"
				sname="Nobody"
				link="link3"
			/>
		</>
	);
}
export default App;
