import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getTasks } from '../actions/tasks';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';

const Board = ({ project, onCreateTodo }) => {
	const dispatch = useDispatch();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		if (project) {
			dispatch(getTasks(project._id));
		}
	}, [project, dispatch]);
	return (
		<>
			<Col sm={10}>
				<Row className="h-100">
					<Col sm={4} className="border rounded border-1 p-3">
						<h4>Todos</h4>
						<TodoForm onCreateTodo={onCreateTodo} />
						{project && project?.tasks.map(task => <TodoItem task={task} key={task._id} />)}
					</Col>
					<Col sm={4} className="border rounded border-1 p-3">
						<h4>In progress</h4>
					</Col>
					<Col sm={4} className="border rounded border-1 p-3">
						<h4>Done</h4>
					</Col>
				</Row>
			</Col>
		</>
	);
};

export default Board;
