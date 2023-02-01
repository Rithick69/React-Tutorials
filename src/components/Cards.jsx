import React from "react";
import "../styles.css";
import Heading from "./Heading";
import Image from "./Image";

// To access all the props as objects we write props in the function
const Cards = (props) => (
	//console.log(props);
	<>
		<div className="cards">
			<div className="card">
				<Image imgsrc={props.imgsrc} />
				<div className="card__info">
					<Heading title={props.title} />
					<h3 className="card__title">{props.sname}</h3>
					<a href={props.link} target="_blank" rel="noreferrer">
						<button>Watch Now</button>
					</a>
				</div>
			</div>
		</div>
	</>
);
export default Cards;
