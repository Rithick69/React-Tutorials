import React from "react";

const Tabs = () => {
	return (
		<>
			<div className="menu-tabs container">
				<div className="menu-tab d-flex justify-content-around">
					<button
						className="btn btn-warning"
						onClick={() => filterItem("breakfast")}
					>
						Breakfast
					</button>
					<button
						className="btn btn-warning"
						onClick={() => filterItem("lunch")}
					>
						Lunch
					</button>
					<button
						className="btn btn-warning"
						onClick={() => filterItem("evening")}
					>
						Evening
					</button>
					<button
						className="btn btn-warning"
						onClick={() => filterItem("dinner")}
					>
						Dinner
					</button>
					<button className="btn btn-warning" onClick={() => setItems(Menu)}>
						All
					</button>
				</div>
			</div>
		</>
	);
};

export default Tabs;
