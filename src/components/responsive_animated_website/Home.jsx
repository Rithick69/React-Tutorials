import React from "react";
import Common from "./Common";
import web from "./Images/Home1.jpg";

const Home = () => {
	return (
		<>
			<Common
				head_text="Grow your business"
				button_text="Get Started"
				visit="/services"
				img={web}
			/>
		</>
	);
};

export default Home;
