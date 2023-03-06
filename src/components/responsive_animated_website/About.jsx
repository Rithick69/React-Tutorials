import React from "react";
import Common from "./Common";
import web from "./Images/About.jpg";

const About = () => {
	return (
		<>
			<Common
				head_text="Welcome to About Page"
				button_text="Contact Here"
				visit="contact"
				img={web}
			/>
		</>
	);
};

export default About;
