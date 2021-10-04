import { useHistory } from 'react-router';
import React from 'react';
import './Course.css';
import { Card, Col, Container } from 'react-bootstrap';

const Course = (props) => {
	console.log(props.course);
	const { id, name, coursePhoto, time, fee } = props.course;
	const history = useHistory();
	const handleDetailsClick = () => {
		history.push(`/course/${id}`);
	};

	return (
		<Container className="course-container">
			<Col>
				<Card className="course">
					<Card.Img variant="top" src={coursePhoto} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>time: {time} </Card.Text>

						<Card.Text>fee: ${fee} million </Card.Text>

						<button onClick={handleDetailsClick} type="button" class="btn btn-info">
							Details
						</button>
					</Card.Body>
				</Card>
			</Col>
		</Container>
	);
};

export default Course;
