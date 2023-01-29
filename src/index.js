//var React = require('react');
import React from "react";
//var ReactDom = require('react-dom');
import ReactDom from "react-dom";
import myfav, { favprog, myName, myNames } from "./App";

// we can also import all functions and variable by using the below line of code
// import * as ques from "./App";
// we can now access all the functions and variable by using ques.myfav like json object
// this is not preferable as we don't get the clarity of what are we exporting.

// ReactDom.render('What to show', 'Where to show', 'callback func');

const rootElement = document.getElementById("root");

// Learning about export modules in React

ReactDom.render(
	<>
		<ol>
			<li>Thapa</li>
			<li>{myfav}</li>
			<li>{favprog}</li>
			<li>{myName()}</li>
			<li>{myNames()}</li>
		</ol>
	</>,
	rootElement
);
