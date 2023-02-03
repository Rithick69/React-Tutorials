import React from "react";
import "./styles.css";
import SlotM from "./components/Slotmach";
import Slotdata from "./components/Slotdata";

// Creating a mini "Slot Machine" game

const App = () => (
	<>
		<h1 className="heading_style">
			Welcome to{" "}
			<span style={{ fontWeight: "bold", backgroundColor: "transparent" }}>
				Slot Machine Game
			</span>
		</h1>
		<div className="slotmachine">
			{/* Installed emojisense extension for emoji */}

			{Slotdata.map((val) => {
				return <SlotM key={val.id} x={val.x} y={val.y} z={val.z} />;
			})}
		</div>
	</>
);

export default App;
