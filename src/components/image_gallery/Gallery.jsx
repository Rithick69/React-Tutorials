import React from "react";
import "./index.css";
import Menu from "./Menu.jsx";
import MenuItems from "./MenuItems";
import Tabs from "./Tabs";

const Gallery = () => {
	const [items, setItems] = useState(Menu);
	const filterItem = (cat) => {
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
			<Tabs />
			<MenuItems items={items} />
		</>
	);
};

export default Gallery;
