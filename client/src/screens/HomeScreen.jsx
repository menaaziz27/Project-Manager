import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProject, fetchProjects } from '../actions/project';
import ProjectList from '../components/ProjectList/ProjectList';
import SearchBar from '../components/SearchBar/SearchBar';
import Modal from 'react-modal';

const HomeScreen = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [projectForm, setProjectForm] = useState({ title: '', description: '' });
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('userInfo'));

	const onCreateProject = () => {
		if (projectForm.title.trim() && projectForm.description.trim()) {
			dispatch(createProject(projectForm));
		}
		setProjectForm({ title: '', description: '' });
		toggleModal();
	};

	useEffect(() => {
		if (user) {
			dispatch(fetchProjects());
		} else {
			navigate('/login');
		}
	}, [dispatch, user, navigate]);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container fluid>
			<Row>
				<Col sm={2}>
					<Row className="p-3">
						<Button onClick={toggleModal}>Create Project</Button>
					</Row>
					<Row className="p-3">
						<Col>
							<SearchBar />
						</Col>
					</Row>
				</Col>
				<ProjectList />
				<Modal
					isOpen={isOpen}
					onRequestClose={toggleModal}
					contentLabel="My dialog"
					className="mymodal"
					overlayClassName="myoverlay"
					closeTimeoutMS={500}
				>
					<form onSubmit={onCreateProject}>
						<Form.Group>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Title"
								value={projectForm?.title}
								onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
								className="w-100 p-1"
								autoFocus
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								placeholder="Description"
								value={projectForm?.description}
								onChange={e => setProjectForm({ ...projectForm, description: e.target.value })}
								className="w-100 p-1"
							></Form.Control>
						</Form.Group>
						<Button type="submit" className="w-100 mt-3" onClick={onCreateProject}>
							Create
						</Button>
					</form>
				</Modal>
			</Row>
		</Container>
	);
};

export default HomeScreen;
