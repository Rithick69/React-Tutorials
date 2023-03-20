import React, { useEffect, useState } from "react";
import TodoList from "./ToDoList";
// import Clock from "react-digital-clock";
import { Add, DeleteForever } from "@mui/icons-material";
import { Tooltip, Button } from "@mui/material";

// TODO LIST using ReactJS

const ToDoCard = () => {
	const [inputList, setInputList] = useState("");
	// Adding []s to the useState makes the curr variable an array.
	// Initialising Items as an empty array.
	const [Items, setItems] = useState([]);

	const itemEvent = (event) => {
		const { value } = event.target;
		setInputList(value);
	};

	// Storing every new item in an empty as well as displaying it

	const listOfItems = () => {
		setItems((prevItems) => {
			// Adding the  prev value of the Items array and if array is empty
			// then push the new value from inputList to the array.
			// UseState return the a new array which becomes the curr data of Items array.

			return [...prevItems, inputList];
		});
		// Clearing the input field after add the item to the array.
		setInputList("");
	};

	const removeAll = () => {
		setItems([]);
	};

	const deleteItem = (id) => {
		// console.log("deleted");
		// Delete elements from the array using Filter.
		setItems((prevItems) => {
			// Onclick element has curr text and index has curr id to be deleted.
			return prevItems.filter((element, index) => {
				// if index == id we filter out that index from the array
				// else return only the part of arr where index!=id.
				return index !== id;
			});
		});
	};

	useEffect(() => {
		localStorage.setItem("lists", JSON.stringify(Items));
	}, [Items]);

	return (
		<>
			<div className="main_div">
				<div className="center_div">
					{/* <h2
						style={{
							marginTop: "20px",
						}}
					>
						<Clock />
					</h2>
					<br /> */}
					<h1
						style={{
							marginTop: "20px",
						}}
					>
						ToDo List
					</h1>
					<Tooltip title="Remove All Items">
						<Button className="todo_button" onClick={removeAll}>
							<DeleteForever />
						</Button>
					</Tooltip>
					<br />
					<input
						type="text"
						placeholder="Add a Item"
						value={inputList}
						onChange={itemEvent}
					/>
					<Tooltip title="Add Item">
						<Button className="todo_button" onClick={listOfItems}>
							<Add />
						</Button>
					</Tooltip>
					<ol>
						{/* <li>{todoItem}</li> */}
						{/* Using map method to display the items of the 'Items' array */}
						{/* We send deleteItem event as props to ToDoList so that we can call the event here */}
						{Items.map((val, index) => (
							<TodoList
								key={index}
								id={index}
								text={val}
								onSelect={deleteItem}
							/>
						))}
					</ol>
				</div>
			</div>
		</>
	);
};

export default ToDoCard;
