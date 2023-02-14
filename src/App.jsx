import React from "react";
// import Accordian from "./components/accordian/Accordian";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Creating a web page using Reactjs and bootstrap.

const App = () => {
	return (
		<>
			<h1 className="text-center my-5 text-danger">Welcome to my Web page</h1>
			<div class="container">
				<div className="row">
					<div className="col-sm">
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/200/301"
								alt="Card image cap"
								height="200px"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/201/300"
								alt="Card image cap"
								height="200px"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="card">
							<img
								className="card-img-top"
								src="https://picsum.photos/202/300"
								alt="Card image cap"
								height="200px"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const App2 = () => {
	return <>{/* <Accordian /> */}</>;
};

export default App;
