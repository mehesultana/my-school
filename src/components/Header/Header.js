import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink to="/home">Home</NavLink>
						<NavLink to="/courses">ourses</NavLink>
						<NavLink to="#pricing">Pricing</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
