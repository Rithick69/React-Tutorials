import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import User from "./User";
import "./index.css";
import Search from "./Search";
// React Routers

// React Routers are used for client side rendering.
// To avoid the need to reload page when change tabs etc.

// What is React-Router, anyway?
// Many modern websites are actually made up of a single page,
// they just look like multiple pages because they contain components that render like separate pages.
// These are usually referred to as SPAs - single-page applications. At its core, what React Router does is conditionally render certain components to display depending on the route being used in the URL
// (/ for the home page, /about for the about page, etc.).

// Routes and Route acts as a switch case element whereby the page renders whichever url is selected.

const Routers = () => {
	return (
		<>
			{/* Nested Routing */}
			{/* 'index' prop add the component by default to its parent and displays it/ */}
			<Routes>
				<Route path="/" element={<MainHeader />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About name="About" />} />
					<Route path="user" element={<User />} />
					<Route path="search" element={<Search />} />
					{/* inorder to pass parameters through url we need to write the path like this. */}
					<Route path="user/:fname/:lname" element={<User />} />
					{/* 404 error page */}
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</>
	);
};

export default Routers;
