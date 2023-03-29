import React from "react";

const MenuItems = (props) => {
	return (
		<>
			<div className="menu-items container-fluid mt-5">
				<div className="row">
					<div className="col-11 mx-auto">
						<div className="row my-5">
							{props.items.map((elem) => {
								const { id, name, image, category, description, price } = elem;
								return (
									<>
										<div
											className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
											key={id}
										>
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

export default MenuItems;
