import React, { useState } from "react";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./index.css";

function Template() {
	const [text, setText] = useState();
	const [isCopied, setCopied] = useClipboard(text);

	// If you want to listen continuously, set the continuous property to true when calling startListening
	const startListening = () =>
		SpeechRecognition.startListening({
			continuous: true,
			language: "en-IN",
		});

	const stopListening = () => SpeechRecognition.stopListening();

	// To make the microphone transcript available in your component, simply add:
	const { transcript, browserSupportsSpeechRecognition } =
		useSpeechRecognition();

	// Checks if the browser supports Speech Recognition.
	if (!browserSupportsSpeechRecognition) {
		return null;
	}

	return (
		<>
			<div className="container">
				<h2>Speech to Text Converter</h2>
				<br />
				<p>
					A React hook that converts speech fromt the microphone to text and
					makes it available to your React components.
				</p>
				<div className="main-content" onClick={() => setText(transcript)}>
					{transcript}
				</div>
				<div className="btn-style">
					<button onClick={setCopied}>
						{isCopied ? "Copied" : "Copy to Clipboard"}
					</button>
					<button onClick={startListening}>Start Recording</button>
					<button onClick={stopListening}>Stop Recording</button>
				</div>
			</div>
		</>
	);
}

export default Template;
