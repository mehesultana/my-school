import { useHistory } from 'react-router';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
	console.log(props.course);
	const { id, name, coursePhoto, time, fee } = props.course;
	const history = useHistory();
	const handleDetailsClick = () => {
		history.push(`/course/${id}`);
	};

	return (
		<Col>
			<Card>
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
	);
};

export default Course;
