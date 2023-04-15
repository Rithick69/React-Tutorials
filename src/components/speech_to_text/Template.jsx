import React from "react";
import "./index.css";

function Template() {
	return (
		<>
			<div className="container">
				<h2>Speech to Text Converter</h2>
				<br />
				<p>
					A React hook that converts speech fromt the microphone to text and
					makes it available to your React components.
				</p>
				<div className="main-content"></div>
				<div className="btn-style">
					<button>Copy to Clipboard</button>
					<button>Start Recording</button>
					<button>Stop Recording</button>
				</div>
			</div>
		</>
	);
}

export default Template;
