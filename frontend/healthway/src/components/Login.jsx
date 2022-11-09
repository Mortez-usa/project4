import React from 'react';

function login({
	// handleFirstNameChange,
	// handleLastNameChange,
	handlePasswordChange,
	handleEmailChange,
	// firstName,
	// lastName,
	password,
	email,
	// registerUser,
	loginUser
}) {
	return (
		<div className='login'>
			<h1>login account</h1>
			<form onSubmit={loginUser} className='form'>
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

				<input type='submit' value='Login' />
			</form>
		</div>
	);
}

export default login;
