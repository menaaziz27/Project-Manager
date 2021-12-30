import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as api from '../api';
import ProjectItem from '../components/ProjectItem';

const HomeScreen = () => {
	const [projects, setProjects] = useState([]);
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('userInfo'));

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

	return (
		<Container fluid>
			<Row>
				<Col sm={2}>
					<Row className="p-3">sidebar</Row>
					<Row className="p-3">sidebar</Row>
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
			</Row>
		</Container>
	);
};

export default HomeScreen;
