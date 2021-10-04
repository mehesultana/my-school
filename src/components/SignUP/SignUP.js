import React from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUP = () => {
	return (
		<Container>
			<form>
				<h2>Create your Account</h2>

				<div className="form-group row">
					<label for="inputEmail3" className="col-sm-2 col-form-label">
						Your Name
					</label>
					<div className="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Enter Your Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>
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
						Password
					</label>
					<div className="col-sm-10">
						<InputGroup className="mb-5 mt-5">
							<FormControl placeholder="Enter Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						</InputGroup>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<button type="submit" className="btn btn-primary">
							Sign Up
						</button>
					</div>
				</div>
			</form>

			<Link className="dropdown-item" to="#">
				Have an account? Log in
			</Link>
			<Link className="dropdown-item" to="#">
				Forgot password?
			</Link>
		</Container>
	);
};

export default SignUP;
