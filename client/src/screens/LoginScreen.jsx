import React, { useState } from 'react';
import { FormControl, FormLabel, Button, Form, FormGroup } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitHandler = e => {
		e.preventDefault();

		if (email && password) {
			dispatch(login({ email, password }));
			navigate('/');
		}
	};

	return (
		<FormContainer className="border rounded border-1">
			<Form onSubmit={onSubmitHandler} className="mt-5">
				<FormGroup>
					<FormLabel>Email</FormLabel>
					<FormControl
						type="email"
						value={email}
						placeholder="Username"
						onChange={e => setEmail(e.target.value)}
						required
					></FormControl>
				</FormGroup>
				<FormGroup>
					<FormLabel>Password</FormLabel>
					<FormControl
						type="password"
						value={password}
						placeholder="Password"
						onChange={e => setPassword(e.target.value)}
						required
					></FormControl>
				</FormGroup>
				<Button type="submit" variant="primary" className="w-100 mt-3">
					Login
				</Button>
			</Form>
		</FormContainer>
	);
};

export default LoginScreen;
