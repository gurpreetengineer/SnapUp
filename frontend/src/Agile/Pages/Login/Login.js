import React, { useState, useEffect } from 'react';
import { PostNewUserData } from '../../../Redux/APIhitter';
const Login = () => {
	const [userDetails] = useState({
		firstName: 'Dummy',
		lastName: 'user',
		email: 'Dummy@user.user',
		password: 'Dummy',
		phoneNumber: 1236549870
	});

	useEffect(() => {
		const result = PostNewUserData(userDetails);
		console.log('result', result);
	}, []);

	return (
		<div>
			This is login screen
		</div>
	);
};

export default Login;
