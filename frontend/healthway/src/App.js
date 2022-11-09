import './App.css';
import './Auth.css';
import About from './components/About.jsx';
import Chart from './components/Chart.jsx';
import Auth from './components/Auth.jsx';
import Login from './components/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleFirstNameChange(event) {
		setFirstName(event.target.value);
	}

	function handleLastNameChange(event) {
		setLastName(event.target.value);
	}

	function handleEmailChange(event) {
		setEmail(event.target.value);
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value);
	}

	async function registerUser(event) {
		event.preventDefault();
		const response = await fetch(`http://localhost:4000/api/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
			}),
		})

		const data = await response.json()
		console.log(data)
	}

	async function loginUser(event) {
		event.preventDefault();
		const response = await fetch(`http://localhost:4000/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();
		console.log(data);
	}

	return (
		<div className='app'>
			<div>
				<Routes>
					<Route path='/' element={<Chart />} />
					<Route
						path='/signup'
						element={
							<Auth
								handleFirstNameChange={handleFirstNameChange}
								handleLastNameChange={handleLastNameChange}
								handleEmailChange={handleEmailChange}
								handlePasswordChange={handlePasswordChange}
								firstName={firstName}
								lastName={lastName}
								email={email}
								password={password}
								registerUser={registerUser}
							/>
						}
					/>
					<Route
						path='/login'
						element={<Login loginUser={loginUser} />}
					/>
					<Route path='/about' element={<About />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
