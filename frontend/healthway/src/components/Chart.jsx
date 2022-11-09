import React from 'react';
import { Link } from 'react-router-dom';

function Chart(props) {
	return (
		<div className='charts'>
			<div className='grid-item item1'>
				<h1>Health Tracker</h1>
				<p>
					Health tracker let you to track your health parameters during a period
					of time.
				</p>
			</div>
			<div className='grid-item item2'>
				<Link to='/signup'>account</Link>
			</div>
			<div className='grid-item item3'>
				<div className='card1'>Weight</div>
				<div className='card2'>BMI</div>
				<div className='card3'>Sleep</div>
			</div>
			<div className='grid-item item4'>4</div>
			<div className='grid-item item5'>
				<div className='tips'>
					<h2>Health tips</h2>
					<p>
						The Dietary Guidelines for Americans (Dietary Guidelines) provides
						advice on what to eat and drink to meet nutrient needs, promote
						health, and prevent disease.
					</p>
				</div>
			</div>
			<div className='grid-item item6'>6</div>
		</div>
	);
}

export default Chart;
