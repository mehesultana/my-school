import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Blog from './components/Blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';
import SignUP from './components/SignUP/SignUP';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header></Header>
				<Switch>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/courses">
						<Courses></Courses>
					</Route>
					<Route path="/course/:id">
						<CourseDetails></CourseDetails>
					</Route>
					<Route path="/blog">
						<Blog></Blog>
					</Route>
					<Route path="/contact">
						<ContactUs></ContactUs>
					</Route>
					<Route path="/signup">
						<SignUP></SignUP>
					</Route>
					<Route path="/about">
						<AboutUs></AboutUs>
					</Route>

					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
