import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import "./index.css";
// React Routers

// React Routers are used for client side rendering.
// To avoid the need to reload page when change tabs etc.

// What is React-Router, anyway?
// Many modern websites are actually made up of a single page,
// they just look like multiple pages because they contain components that render like separate pages.
// These are usually referred to as SPAs - single-page applications. At its core, what React Router does is conditionally render certain components to display depending on the route being used in the URL
// (/ for the home page, /about for the about page, etc.).

const Routers = () => {
	const Home = () => {
		return <h1>Hello, This is Home</h1>;
	};
	const Name = () => {
		return <h1>Hello, I am Rithick</h1>;
	};
	return (
		// Routes and Route acts as a switch case element whereby the page renders whichever url is selected.
		// Path stands for the url and element is the component to be rendered.
		// Exact is a very useful property by which we can specify a url and avoid rendering mistakes because of using the same paths.
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="contact/*" element={<Contact />} />
				<Route path="/contact/name" element={<Name />} />
				{/* 404 error page */}
				<Route element={<Error />} />
			</Routes>
		</>
	);
};

export default Routers;
