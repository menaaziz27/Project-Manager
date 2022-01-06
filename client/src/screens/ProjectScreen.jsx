import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import * as api from '../api';
import SideMenu from '../components/SideMenu/SideMenu';
import Board from '../components/Board/Board';

const ProjectScreen = () => {
	const [project, setProject] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getProjectWithTodos = async () => {
			const { data } = await api.getProjectWithTodos(id);
			setProject(data);
		};
		getProjectWithTodos();
	}, [id]);

	return (
		<Container fluid>
			<Row>
				{project && <SideMenu project={project} setProject={setProject} />}
				<Board />
			</Row>
		</Container>
	);
};

export default ProjectScreen;
