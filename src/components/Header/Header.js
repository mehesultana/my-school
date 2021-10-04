import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand to="/home">My School</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink to="/home">Home</NavLink>
						<NavLink to="/courses">Courses</NavLink>
						<NavLink to="/blog">Blog</NavLink>
						<NavLink to="/contact">Contact Us</NavLink>
						<NavLink to="/signup">Sign Up</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
