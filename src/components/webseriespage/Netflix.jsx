import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Netflix = () => (
	<Cards
		key={Sdata[0].id}
		imgsrc={Sdata[0].imgsrc}
		title={Sdata[0].title}
		sname={Sdata[0].sname}
		link={Sdata[0].link}
	/>
);

export default Netflix;
