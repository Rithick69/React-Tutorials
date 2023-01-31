import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

// Webpage for top 5 shows uing props or property
// Props are used to create custom properties of any element beyonb the scope
// of the element.

// inorder to get different data for the same card element we use props.

ReactDOM.render(<App />, rootElement);
