import React from 'react';
import { Link } from 'react-router-dom';

function auth({
	handleFirstNameChange,
	handleLastNameChange,
	handlePasswordChange,
	handleEmailChange,
	firstName,
	lastName,
	password,
	email,
	registerUser,
}) {
	return (
		<div className='auth'>
			<h1>Create account</h1>
			<form onSubmit={registerUser} className='form'>
				<input
					className='first-name input-box'
					value={firstName}
					onChange={handleFirstNameChange}
					type='text'
					placeholder='First Name'
				/>
				<input
					className='last-name input-box'
					value={lastName}
					onChange={handleLastNameChange}
					type='text'
					placeholder='Last Name'
				/>
				<input
					className='email input-box'
					value={email}
					onChange={handleEmailChange}
					type='email'
					placeholder='Email'
				/>
				<input
					className='password input-box'
					value={password}
					onChange={handlePasswordChange}
					type='password'
					placeholder='Password'
				/>
				<input type='submit' value='Register' />
				<Link to='/login'>login</Link>
			</form>
		</div>
	);
}

export default auth;
