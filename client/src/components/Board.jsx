import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import * as api from '../api';

const Board = ({ project }) => {
	const [tasks, setTasks] = useState([]);

	const onTaskDelete = async _id => {
		await api.deleteTask(_id);
		setTasks(tasks.filter(task => task._id !== _id));
	};

	const onTaskCreate = async content => {
		const { data } = await api.createTask(project._id, { content });
		let newTask = data.task;
		setTasks(prevState => [...prevState, newTask]);
	};

	const onTaskUpdate = task => {
		console.log(task);
	};

	useEffect(() => {
		if (project) {
			const getTasks = async () => {
				const { data } = await api.fetchTasks(project._id);
				setTasks(data);
			};
			getTasks();
		}
	}, [project]);

	return (
		<>
			<Col sm={10}>
				<Row className="h-100">
					<Col sm={4} className="border rounded border-1 p-3">
						<h4>Todos</h4>
						<TodoForm onTaskCreate={onTaskCreate} />
						{tasks &&
							tasks.map(task => (
								<TodoItem
									task={task}
									setTasks={setTasks}
									onTaskUpdate={onTaskUpdate}
									onTaskDelete={onTaskDelete}
									key={task._id}
								/>
							))}
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
