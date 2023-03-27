import React from "react";
import "./index.css";
import Menu from "./Menu.jsx";

const Gallery = () => {
	const [items, setItems] = useState(Menu);
	return (
		<>
			<h1 className="main-heading mt-5 text-center">
				Order Your Favourite Dish
			</h1>
			<hr />
			<div className="menu-tabs container">
				<div className="menu-tab d-flex justify-content-around">
					<button className="btn btn-warning">Breakfast</button>
					<button className="btn btn-warning">Lunch</button>
					<button className="btn btn-warning">Evening</button>
					<button className="btn btn-warning">Dinner</button>
				</div>
			</div>
			<div className="menu-items container-fluid mt-5">
				<div className="row">
					<div className="col-11 mx-auto">
						<div className="row my-5">
							{items.map((elem) => {
								const { id, name, image, category, description, price } = elem;
								return (
									<>
										<div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-3">
											<div className="row item-inside">
												{/* for images */}
												<div className="col-12 col-md-12 col-lg-4 img-div">
													<img src="#" alt={name} className="img-fluid" />
												</div>
												{/* Menu Description */}
												<div className="col-12 col-md-12 col-lg-8">
													<div className="main-title pt-4 pb-3">
														<h1>{name}</h1>
														<p>{description}</p>
													</div>
													<div className="menu-price">
														<div className="price-book d-flex justify-content-between align-items-center">
															<h2>Price: {price}</h2>
															<a href="#">
																<button className="btn btn-primary">
																	Order Now
																</button>
															</a>
														</div>
														<p>*Prices may vary on selected date.</p>
													</div>
												</div>
											</div>
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
