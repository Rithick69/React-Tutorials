import React, { useState } from "react";
import "./index.css";
import Menu from "./Menu.jsx";
import MenuItems from "./MenuItems";
import Tabs from "./Tabs";

const allCatItems = [
	...new Set(Menu.map((currItem) => currItem.category)),
	"all",
];

const Gallery = () => {
	const [items, setItems] = useState(Menu);
	const [catItems, setCatItems] = useState(allCatItems);
	const filterItem = (cat) => {
		if (cat === "all") {
			setItems(Menu);
			return;
		}
		const updatedItem = Menu.filter((curr) => {
			return curr.category === cat;
		});
		setItems(updatedItem);
	};
	return (
		<>
			<h1 className="main-heading mt-5 text-center">
				Order Your Favourite Dish
			</h1>
			<hr />
			{/* Menu Tabs List will come here */}
			<Tabs filterItem={filterItem} catItems={catItems} />
			{/* Menu Items List will come here */}
			<MenuItems items={items} />
		</>
	);
};

export default Gallery;
