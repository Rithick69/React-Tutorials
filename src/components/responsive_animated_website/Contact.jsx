import React, { useState } from "react";

const Contact = () => {
	const [data, setData] = useState({
		fullname: "",
		phone: "",
		email: "",
		message: "",
	});
	const InputEvent = (event) => {
		const { value, name } = event.target;
		// On change in input fields this event is called and the data is updated.
		setData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	// on submit the alert message displays our data.
	const formSubmit = (e) => {
		e.preventDefault();
		alert(
			`My name is "${data.fullname}". My mobile number is "${data.phone}". My email address is "${data.email}". The message is "${data.message}".`
		);
	};
	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Contact Us</h1>
			</div>
			<div className="container contact_div my-5">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div className="mb-3">
								<label for="exampleFormControlInput1" className="form-label">
									Full Name
								</label>
								<input
									type="text"
									className="form-control"
									id="exampleFormControlInput1"
									name="fullname"
									value={data.fullname}
									onChange={InputEvent}
									placeholder="Enter your name"
									required
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlInput2" className="form-label">
									Phone Number
								</label>
								<input
									type="number"
									className="form-control"
									id="exampleFormControlInput2"
									name="phone"
									value={data.phone}
									onChange={InputEvent}
									placeholder="mobile number"
									required
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlInput3" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput3"
									name="email"
									value={data.email}
									onChange={InputEvent}
									placeholder="name@example.com"
									required
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlTextarea1" className="form-label">
									Message
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									name="message"
									value={data.message}
									onChange={InputEvent}
								></textarea>
							</div>
							<div className="col-12">
								<button className="btn btn-outline-primary" type="submit">
									Submit form
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
