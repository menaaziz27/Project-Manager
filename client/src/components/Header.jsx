import React from 'react';
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { LOGOUT } from '../constants/actionTypes';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/auth';
const Header = () => {
	const dispatch = useDispatch();
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Project Manager</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="justify-content-end" style={{ width: '100%' }}>
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
							<LinkContainer to="/register">
								<Nav.Link>register</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
							<Button type="button" className="btn" onClick={() => dispatch(logout())}>
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
