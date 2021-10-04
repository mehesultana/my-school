import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import img1 from '../../images/photo1.svg';
import img2 from '../../images/photo2.svg';
import img3 from '../../images/photo3.svg';
import img4 from '../../images/home2.png';
import img5 from '../../images/course.png';
import img6 from '../../images/course2.png';
import img7 from '../../images/course3.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Container>
			<div id="carouselExampleSlidesOnly" class="carousel slide bg-success" data-ride="carousel ">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="row align-items-center">
							<div class="col-md-6 mt-5 mb-5 order-md-1 pb-5 banner-text">
								<h1 class="text-white">Learn a language for real life</h1>
								<p class="text-white">Phrases useful in everyday life. Taught with video clips of real locals.</p>

								<Link to={'../SignUP/SignUP.js'}>
									<button type="button" class="btn btn-warning">
										Get Started
									</button>
								</Link>
							</div>
							<div class="col-md-6 align-items-center order-2 order-md-2">
								<img src={img4} class="d-block w-50" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* courses  */}

			<div className="courses-part">
				<h1>Our Popular Courses</h1>
				<br />
				<CardGroup>
					<Card>
						<Card.Img variant="top" src={img5} className="h-10" />
						<Card.Body>
							<Card.Title>Arabic Through the Quran exercises</Card.Title>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={img6} className="h-10" />
						<Card.Body>
							<Card.Title>Learn French online with My School</Card.Title>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={img7} className="h-100" />
						<Card.Body>
							<Card.Title>Learn German online with My School</Card.Title>
						</Card.Body>
					</Card>
				</CardGroup>
				<br />
				<Link to={'../Courses/Courses.js'}>
					<button type="button" class="btn btn-warning">
						Explore More <FontAwesomeIcon icon={faArrowAltCircleRight} />
					</button>
				</Link>
			</div>

			{/* about my school */}

			<div className="middle-part">
				<h1>Why My School?</h1>
				<CardGroup>
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
