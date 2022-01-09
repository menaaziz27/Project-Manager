import React, { useState, useEffect } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/auth';
import decode from 'jwt-decode';
import SearchBox from '../SearchBox/SearchBox';

const Header = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo'))?.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logout());
		navigate('/login');
	};

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				dispatch(logout());
				navigate('/login');
			}
		} else {
			navigate('/login');
		}

		setUser(JSON.parse(localStorage.getItem('userInfo')));
	}, [dispatch]);

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Project Manager</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<SearchBox />
						<Nav className="text-center">
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown> */}
							<LinkContainer to="/register">
								<Nav.Link>register</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
							<Button type="button" className="btn" onClick={logoutHandler}>
								logout
							</Button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
