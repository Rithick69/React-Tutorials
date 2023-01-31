import React from "react";
import "../styles.css";
// To access all the props as objects we write props in the function
function Cards(props) {
	//console.log(props);
	return (
		<>
			<div className="cards">
				<div className="card">
					<img src={props.imgsrc} alt="Pic" className="card__img" />
					<div className="card__info">
						<span className="card__category">{props.title}</span>
						<h3 className="card__title">{props.sname}</h3>
						<a href={props.link} target="_blank" rel="noreferrer">
							<button>Watch Now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
export default Cards;
