import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<Container className="header">
			<h1 to="/home">My School</h1>
			<Nav className="navbar">
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/courses">Courses</NavLink>
				<NavLink to="/blog">Blog</NavLink>
				<NavLink to="/contact">Contact Us</NavLink>
				<NavLink to="/signup">Sign Up</NavLink>
			</Nav>
		</Container>
	);
};

export default Header;
