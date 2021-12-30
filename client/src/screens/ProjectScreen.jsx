import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as api from '../api';
// import { createTaskAction, getTasks } from '../actions/tasks';
import SideMenu from '../components/SideMenu/SideMenu';
import Board from '../components/Board/Board';

const ProjectScreen = () => {
	const [project, setProject] = useState(null);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		const getProjectWithTodos = async () => {
			const { data } = await api.getProjectWithTodos(id);
			setProject(data);
		};
		getProjectWithTodos();
	}, []);

	return (
		<Container fluid>
			<Row>
				{project && <SideMenu project={project} />}
				<Board />
			</Row>
		</Container>
	);
};

export default ProjectScreen;
