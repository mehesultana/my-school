import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUP = () => {
	return (
		<Container>
			<form>
				<h2>Create your Account</h2>

				<div class="form-group row">
					<label for="inputEmail3" class="col-sm-2 col-form-label">
						Your Name
					</label>
					<div class="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Enter Your Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>
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
						Password
					</label>
					<div class="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Enter Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>

				<div class="form-group row">
					<div class="col-sm-10">
						<button type="submit" class="btn btn-primary">
							Log In
						</button>
					</div>
				</div>
			</form>

			<Link className="dropdown-item" href="#">
				New around here? Sign up
			</Link>
			<Link className="dropdown-item" to="#">
				Forgot password?
			</Link>
		</Container>
	);
};

export default SignUP;
