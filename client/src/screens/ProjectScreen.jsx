import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as api from '../api';
import { createTaskAction, getTasks } from '../actions/tasks';
import SideMenu from '../components/SideMenu';
import Board from '../components/Board.jsx';

const ProjectScreen = () => {
	const [project, setProject] = useState(null);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		const getProjectWithTodos = async () => {
			const { data } = await api.getProjectWithTodos(id);
			console.log(data);
			setProject(data);
		};
		getProjectWithTodos();
	}, []);

	// useEffect(() => {
	// 	if (project) {
	// 		dispatch(getTasks(project._id));
	// 	}
	// }, [project, dispatch]);

	const onCreateTodo = content => {
		// create task here
		dispatch(createTaskAction(id, { content }));
	};
	return (
		<Container fluid>
			<Row>
				{project && <SideMenu title={project?.title} description={project?.description} />}
				<Board project={project} onCreateTodo={onCreateTodo} />
			</Row>
		</Container>
	);
};

export default ProjectScreen;
