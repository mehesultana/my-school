import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import img1 from '../../images/photo1.svg';
import img2 from '../../images/photo2.svg';
import img3 from '../../images/photo3.svg';
import img4 from '../../images/home2.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import fakeData from '../../resources/fakeData';

const Home = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		setCourses(fakeData);
		// console.log(fakeData);
	}, [courses]);
	return (
		<Container>
			<div id="carouselExampleSlidesOnly" className="carousel slide bg-success bg-opacity-75 intro-part" data-ride="carousel ">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="row align-items-center">
							<div className="col-md-6 mt-5 mb-5 order-md-1 pb-5 banner-text">
								<h1 className="text-white">Learn a language for real life</h1>
								<p className="text-white">Phrases useful in everyday life. Taught with video clips of real locals.</p>

								<Link to="/signup">
									<button type="button" className="btn btn-warning">
										Get Started
									</button>
								</Link>
							</div>
							<div className="col-md-6 align-items-center order-2 order-md-2">
								<img src={img4} className="d-block w-50" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="advantage">
				<h4>Course Advantage</h4>
				<CardGroup>
					<Card>
						<Card.Body>
							<Card.Title>Live Video Class</Card.Title>
							<Card.Text>Students will be able to take part in classes directly.</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Recorded Class</Card.Title>
							<Card.Text>We will provide recorded videos.</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Group Study</Card.Title>
							<Card.Text>Students will connect with others and with the world around them.</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>

			{/* courses  */}
			<Container>
				<div className="courses-part">
					<h1>Our Popular Courses</h1>

					<Row xs={1} md={3} className="g-4 ">
						{courses.slice(0, 6).map((cs) => {
							const { id } = cs;
							return (
								<Fragment key={id}>
									<Course course={cs}></Course>
								</Fragment>
							);
						})}
					</Row>
				</div>
				<br />
				<Link to="/courses">
					<button type="button" className="btn btn-warning">
						Explore More <FontAwesomeIcon icon={faArrowAltCircleRight} />
					</button>
				</Link>
			</Container>

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
