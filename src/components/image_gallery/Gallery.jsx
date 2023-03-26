import React from "react";
import "./index.css";
import Menu from "./Menu.jsx";

const Gallery = () => {
	return (
		<>
			<h1 className="main-heading mt-5 text-center">
				Order Your Favourite Dish
			</h1>
			<hr />
			<div className="menu-tabs container">
				<div className="menu-tab d-flex justify-content-around">
					<button className="btn btn-warning">Breakfast</button>
					<button className="btn btn-warning">Lunch</button>
					<button className="btn btn-warning">Evening</button>
					<button className="btn btn-warning">Dinner</button>
				</div>
			</div>
		</>
	);
};

export default Gallery;
