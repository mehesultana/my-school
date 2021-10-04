import React from 'react';
import fakeData from '../../resources/fakeData';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		setCourses(fakeData);
		console.log(fakeData);
	}, [courses]);

	return (
		<Container>
			<div className="courses">
				<h1>Choose your language</h1>
				<h3>Start Learning</h3>
				<Row xs={1} md={3} className="g-4 ">
					{courses.map((cs) => {
						const { id } = cs;
						return (
							<Fragment key={id}>
								<Course course={cs}></Course>
							</Fragment>
						);
					})}
				</Row>
			</div>
		</Container>
	);
};

export default Courses;
