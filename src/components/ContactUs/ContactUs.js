import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
	return (
		<div className="contact">
			<form>
				<h1>Need Our Help ?</h1>

				<div className="form-group row">
					<label for="inputEmail3" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>
				<div className="form-group row">
					<label for="inputPassword3" className="col-sm-2 col-form-label">
						How Can We Help You ?
					</label>
					<div className="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Explain Your Problem" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactUs;
