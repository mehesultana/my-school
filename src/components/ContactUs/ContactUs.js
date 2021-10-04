import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const ContactUs = () => {
	return (
		<div>
			<form>
				<h1>Need Our Help ?</h1>

				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">
						Email
					</label>
					<div class="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>
				<div class="form-group row">
					<label for="inputPassword3" class="col-sm-2 col-form-label">
						How Can We Help You ?
					</label>
					<div class="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Explain Your Problem" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>

				<div class="form-group row">
					<div class="col-sm-10">
						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactUs;
