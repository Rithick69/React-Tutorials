import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import User from "./User";
import "./index.css";
import Search from "./Search";

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainHeader />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About name="About" />} />
					<Route path="user" element={<User />} />
					<Route path="search" element={<Search />} />
					<Route path="user/:fname/:lname" element={<User />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</>
	);
};

export default Routers;
