import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import fakeData from '../../resources/fakeData';
import './CourseDetails.css';

const CourseDetails = () => {
	const { id } = useParams();
	const history = useHistory();

	const backHome = () => {
		history.push(`/home`);
	};
	const [course, setCourse] = useState({});
	useEffect(() => {
		setCourse(fakeData[0]);
		console.log(fakeData[0]);
	}, [id]);

	const { name, coursePhoto, time, fee, details } = course;
	return (
		<Container className="details">
			<Card>
				<Card.Img variant="top" className="details-img" src={coursePhoto} />
				<Card.Body>
					<h1>Name: {name}</h1>
					<Card.Text>Course Duration: {time}</Card.Text>
					<p>Course Fee : ${fee}</p>
					<p>Details : {details}</p>
				</Card.Body>
				<Button className="mb-4" variant="warning" onClick={backHome}>
					Add To Cart
				</Button>
			</Card>
			<Button variant="success" onClick={backHome}>
				Back Home
			</Button>
		</Container>
	);
};

export default CourseDetails;
