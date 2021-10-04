import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Blog.css';
import blog1 from '../../images/blog1.png';
import blog2 from '../../images/blog2.png';
import blog3 from '../../images/blog3.png';
import blog4 from '../../images/blog4.png';
import blog5 from '../../images/blog5.png';
import blog6 from '../../images/blog6.png';

const Blog = () => {
	return (
		<Container>
			<div>
				<h2>All The Blogs:</h2>
				<p>
					Discover mind-blowing language learning tips, stories from the world of languages, and more key advice to help you learn fast. And have fun while you're doing it. Articles to brighten your language learning journey. Read learning guides for different languages, Memrise learning methods,
					language learning news, motivational tips and more. Put together by Memrise’s language specialists.
				</p>
			</div>

			<div className="blog-part">
				<h1>Must Read Blogs</h1>
				<br />
				<CardGroup>
					<Card className="blog">
						<Card.Img variant="top" src={blog1} className="h-100" />
						<Card.Body>
							<Card.Title>Japanese Culture: Super Cool Things to Know when Learning Japanese</Card.Title>
						</Card.Body>
					</Card>
					<Card className="blog">
						<Card.Img variant="top" src={blog2} className="h-100" />
						<Card.Body>
							<Card.Title>Sports, language and connecting with others</Card.Title>
						</Card.Body>
					</Card>
					<Card className="blog">
						<Card.Img variant="top" src={blog3} className="h-100" />
						<Card.Body>
							<Card.Title>Korean Culture: Top 6 things to remember when learning Korean</Card.Title>
						</Card.Body>
					</Card>
					<Card className="blog">
						<Card.Img variant="top" src={blog4} className="h-100" />
						<Card.Body>
							<Card.Title>What language should I learn?</Card.Title>
						</Card.Body>
					</Card>
					<Card className="blog">
						<Card.Img variant="top" src={blog5} className="h-100" />
						<Card.Body>
							<Card.Title>Easiest Languages to Learn: Conquer a Language in 30 minutes</Card.Title>
						</Card.Body>
					</Card>
					<Card className="blog">
						<Card.Img variant="top" src={blog6} className="h-100" />
						<Card.Body>
							<Card.Title>Mexican Spanish Learning Tips for English Speakers</Card.Title>
						</Card.Body>
					</Card>
				</CardGroup>
			</div>
		</Container>
	);
};

export default Blog;
