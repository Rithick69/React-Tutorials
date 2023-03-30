import React from "react";

const Tabs = ({ filterItem, catItems }) => {
	return (
		<>
			<div className="menu-tabs container">
				<div className="menu-tab d-flex justify-content-around">
					{catItems.map((elem, index) => {
						return (
							<button
								className="btn btn-warning"
								key={index}
								onClick={() => filterItem(elem)}
							>
								{elem}
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Tabs;
