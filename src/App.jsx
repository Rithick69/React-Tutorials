import React from "react";
import SlotM from "./components/Slotmach";

// Creating a mini "Slot Machine" game

const App = () => (
	<>
		<h1 className="heading_style">
			Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>
		</h1>
		<div className="slotmachine">
			{/* Installed emojisense extension for emoji */}
			<SlotM x=" 😄 " y=" 😄 " z=" 😄 " />
			<hr />
			<SlotM x=" 🎅 " y=" 🎅 " z=" 😄 " />
			<hr />
			<SlotM x=" 🍎 " y=" 🍎 " z=" 🍎 " />
			<hr />
			<SlotM x=" 🍌 " y=" 😆 " z=" 🍎 " />
		</div>
	</>
);

export default App;
