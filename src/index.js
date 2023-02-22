import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// To use React routers we need to import a few components from react routers.

import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
	// We need to add the App component inside browserRouter
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
);
