import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../components/Modal/ModalComponent';
import { useDispatch } from 'react-redux';
import { createProject, fetchProjects } from '../actions/project';
import ProjectList from '../components/ProjectList/ProjectList';
import SearchBar from '../components/SearchBar/SearchBar';

const HomeScreen = () => {
	const [show, setShow] = useState(false);
	const [project, setProject] = useState({ title: '', description: '' });
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('userInfo'));

	const handleSave = () => {
		if (project.title.trim() && project.description.trim()) {
			dispatch(createProject(project));
		}
		setProject({ title: '', description: '' });
		handleShow();
	};

	useEffect(() => {
		if (user) {
			dispatch(fetchProjects());
		} else {
			navigate('/login');
		}
	}, [dispatch, user, navigate]);

	const handleShow = () => {
		setShow(!show);
	};
	return (
		<Container fluid>
			<Row>
				<Col sm={2}>
					<Row className="p-3">
						<Button onClick={handleShow}>Create Project</Button>
					</Row>
					<Row className="p-3">
						<Col>
							<SearchBar />
						</Col>
					</Row>
				</Col>
				<ProjectList />
				<ModalComponent handleSave={handleSave} show={show} setShow={setShow} centered={true}>
					<form>
						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Title"
								value={project?.title}
								onChange={e => setProject({ ...project, title: e.target.value })}
								className="w-100 p-1"
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								placeholder="Description"
								value={project?.description}
								onChange={e => setProject({ ...project, description: e.target.value })}
								className="w-100 p-1"
							></Form.Control>
						</Form.Group>
					</form>
				</ModalComponent>
			</Row>
		</Container>
	);
};

export default HomeScreen;
