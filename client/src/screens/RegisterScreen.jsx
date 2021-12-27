import React, { useState } from 'react';
import { FormControl, FormLabel, Button, Form, FormGroup } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../actions/auth';

const RegisterScreen = ({ history }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();
	const authData = useSelector(state => state.authData);
	const { loading, error } = authData;
	const navigate = useNavigate();

	const onSubmitHandler = e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setMessage("Passwords don't match!!!");
		} else {
			dispatch(register({ username, email, password }));
			navigate('/login');
		}
	};

	return (
		<>
			<FormContainer className="border rounded border-1">
				{error && <Message variant="danger">{error}</Message>}
				{loading && <Loader variant="danger">{loading}</Loader>}
				{message && <Message variant="danger">{message}</Message>}
				<Form onSubmit={onSubmitHandler} className="mt-5">
					<FormGroup>
						<FormLabel>Username</FormLabel>
						<FormControl
							type="text"
							value={username}
							placeholder="Username"
							onChange={e => setUsername(e.target.value)}
							required
						></FormControl>
					</FormGroup>
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
					<FormGroup>
						<FormLabel>Confirm Password</FormLabel>
						<FormControl
							type="password"
							value={confirmPassword}
							placeholder="Confirm Password"
							onChange={e => setConfirmPassword(e.target.value)}
							required
						></FormControl>
					</FormGroup>
					<Button type="submit" variant="primary" className="w-100 mt-3">
						Register
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default RegisterScreen;
