import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

// Learning about Spread Operators

// 1st Use Case

// const fullname = ["rithick", "chowdhury"];
// const bio = [1, ...fullname, 23, "male"];
// console.log(bio);
// Output: Array(5)
// 0: 1
// 1: "rithick"
// 2: "chowdhury"
// 3: 23
// 4: "male"

// 2nd Use Case

// var shooter = ["Call Of Duty", "Far Cry", "GTA V"];
// var racingGames = ["Need For Speed", "Burnout", "Forza Horizon"];
// var games = [...shooter, ...racingGames];

// console.log(games);

// Output: (6) ['Call Of Duty', 'Far Cry', 'GTA V', 'Need For Speed', 'Burnout', 'Forza Horizon']

// 3rd Use Case : Destructuring

// var shooter = ["Call Of Duty", "Far Cry", "GTA V"];
// var [first, ...remain] = shooter;
// console.log(first);
// console.log(remain);

// Output:
// First: Call Of Duty
// remain : (2) ['Far Cry', 'GTA V']

// 4th Use Case

// const fullName = {
// 	fname: "rithick",
// 	lname: "chowdhury",
// };

// const bio = {
// 	id: 1,
// 	...fullName,
// 	age: 26,
// 	gender: "male",
// };

// console.log(bio);

// Output: {id: 1, fname: 'rithick', lname: 'chowdhury', age: 26, gender: 'male'}
