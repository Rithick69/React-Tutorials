import React from "react";
import SlotM from "./Slotmach";
import "./index.css";
import Slotdata from "./Slotdata";

// Creating a mini "Slot Machine" game

const Slot = () => (
	<>
		<h1 className="heading_style">
			Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>
		</h1>
		<div className="slothouse">
			<div className="slotmachine">
				{/* Installed emojisense extension for emoji */}

				{Slotdata.map((val) => {
					return <SlotM key={val.id} x={val.x} y={val.y} z={val.z} />;
				})}
			</div>
		</div>
	</>
);

export default Slot;
