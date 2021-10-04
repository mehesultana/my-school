import React from 'react';
import './Footer.css';
import img from '../../images/app.png';

const Footer = () => {
	return (
		<div className="text-white footer">
			<div className="col-lg-6 justify-content-center justify-content-lg-end d-flex">
				<h5 className="text-center mb-3 mt-4 mt-lg-0">Get The App</h5>
				<img src={img} className="get-app" alt="" />
			</div>

			<p className="text-center text-white py-3 m-0">© Copyright 2021 ||MY SCHOOL All Rights Reserved</p>
		</div>
	);
};

export default Footer;
