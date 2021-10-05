import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
	return (
		<Container>
			<h1>WE ARE HERE</h1>
			<h3>FOR A CHANGE</h3>

			<div className="about">
				<h4>Welcome to My School</h4>
				<br />
				<p>My School is an open platform for anyone who is willing to empower his/her knowledge. We are committed to enrich your lenguage knowledge, develop personal and professional skills, and be part of your confidence in your everyday life.</p>
			</div>
			<div className="done-card">
				<h3>What We Have Done?</h3>
				<CardGroup>
					<Card>
						<Card.Body>
							<Card.Title>6,000 +</Card.Title>
							<Card.Text>Students Engaged</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>4000 +</Card.Title>
							<Card.Text>Students Trained</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>1000 +</Card.Title>
							<Card.Text>Given Certification.</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</Container>
	);
};

export default AboutUs;
