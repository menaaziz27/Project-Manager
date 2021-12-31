import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as api from '../api';
import ProjectItem from '../components/ProjectItem';
import ModalComponent from '../components/Modal/ModalComponent';

const HomeScreen = () => {
	const [projects, setProjects] = useState([]);
	const [show, setShow] = useState(false);
	const [project, setProject] = useState({ title: '', description: '' });
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('userInfo'));

	const handleSave = () => {
		// create project from api
		// dispatch an action
		// update store
	};

	useEffect(() => {
		const getProjects = async () => {
			const { data } = await api.getProjects();
			console.log(data);
			setProjects(data);
		};
		if (user) {
			getProjects();
		} else {
			navigate('/login');
		}
	}, []);

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
					{/* <Row className="p-3">sidebar</Row> */}
				</Col>
				<Col sm={10}>
					{projects.length === 0 ? (
						<h3>Go create some projects!</h3>
					) : (
						<Row className="p-3 border border-1">
							{projects.map(project => (
								<ProjectItem
									title={project.title}
									description={project.description}
									_id={project._id}
									key={project._id}
								/>
							))}
						</Row>
					)}
				</Col>
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
