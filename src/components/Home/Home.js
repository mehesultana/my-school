import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import img from '../../images/MySchoolBanner.png';
import img1 from '../../images/photo1.svg';
import img2 from '../../images/photo2.svg';
import img3 from '../../images/photo3.svg';

import './Home.css';

const Home = () => {
	return (
		<Container>
			<div>
				<Card className="bg-dark text-white ">
					<Card.Img src={img} alt="Card image" class="opacity-25" />
					<Card.ImgOverlay>
						<Card.Title>Learn a language for real life</Card.Title>
						<Card.Text>Phrases useful in everyday life. Taught with video clips of real locals.</Card.Text>
						<br />
						<Button variant="warning">Get Started</Button>
					</Card.ImgOverlay>
				</Card>
			</div>
			<div className="middle-part">
				<h1>Why My School?</h1>
				<CardGroup className="card ">
					<Card>
						<Card.Img variant="top" src={img1} className="card-img" />
						<Card.Body>
							<Card.Title>Proven memory techniques rooted in science</Card.Title>
							<Card.Text>Learn more, faster, with a learning algorithm developed with the best cognitive science.</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={img2} className="card-img" />
						<Card.Body>
							<Card.Title>Immersive learning. Learn like you live there.</Card.Title>
							<Card.Text>Don’t waste time with phrases people don’t actually say. Learn the language people really use.</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={img3} className="card-img" />
						<Card.Body>
							<Card.Title>Cover everything from holiday essentials to longer-term goals</Card.Title>
							<Card.Text>Find the content topics to match what you need: from holiday small talk to meeting your partner’s family..</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</Container>
	);
};

export default Home;
