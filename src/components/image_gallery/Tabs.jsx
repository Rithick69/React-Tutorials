import React from "react";

const Tabs = ({ filterItem, catItems }) => {
	return (
		<>
			<nav className="navbar">
				<div className="btn-group">
					{catItems.map((elem, index) => {
						return (
							<button
								className="btn-group__item"
								key={index}
								onClick={() => filterItem(elem)}
							>
								{elem}
							</button>
						);
					})}
				</div>
			</nav>
		</>
	);
};

export default Tabs;
