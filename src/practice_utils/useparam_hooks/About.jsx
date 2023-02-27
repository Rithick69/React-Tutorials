import React from "react";
import { useNavigate } from "react-router-dom";

const About = (props) => {
	const navigate = useNavigate();
	// useNavigate helps us to navigate from one page to another.
	const goToContact = () => {
		navigate("/contact");
	};
	return (
		<>
			<section>
				<h1 style={{ margin: "20px 0" }}>This is {props.name} page</h1>
				<button onClick={() => goToContact()}>Go to contact page</button>
				{/* Go back button */}
				<button
					onClick={() => {
						navigate(-1);
					}}
				>
					Go Back
				</button>
			</section>
		</>
	);
};

export default About;
