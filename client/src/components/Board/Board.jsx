import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import TodoForm from './TodoForm/TodoForm';
import TodoItem from './TodoItem/TodoItem';
import * as api from '../../api';
import { useParams } from 'react-router-dom';

const Board = () => {
	const [tasks, setTasks] = useState([]);
	const { id: projectId } = useParams();

	useEffect(() => {
		if (projectId) {
			const getTasks = async () => {
				const { data } = await api.fetchTasks(projectId);
				setTasks(data);
			};
			getTasks();
		}
	}, []);

	const onTaskDelete = async _id => {
		await api.deleteTask(_id);
		setTasks(tasks.filter(task => task._id !== _id));
	};

	const onTaskCreate = async content => {
		try {
			const { data } = await api.createTask(projectId, { content });
			let newTask = data.task;
			setTasks(prevState => [...prevState, newTask]);
		} catch (e) {
			console.log(e);
		}
	};

	const onTaskUpdate = async (task, content, status) => {
		console.log(content, status);
		const { data } = await api.updateTask(task._id, { content, status });
		console.log(data);
		setTasks(prevState => prevState.map(task => (task._id !== data._id ? task : data)));
	};

	return (
		<>
			<Col sm={10}>
				<Row className="h-100">
					<Col sm={4} className="border rounded border-1 p-3">
						<h4>Todos</h4>
						<TodoForm onTaskCreate={onTaskCreate} />
						{tasks &&
							tasks
								.filter(task => task.status === 'TODO')
								.map(task => (
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
						{tasks &&
							tasks
								.filter(task => task.status === 'IN_PROGRESS')
								.map(task => (
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
						<h4>Done</h4>
						{tasks &&
							tasks
								.filter(task => task.status === 'DONE')
								.map(task => (
									<TodoItem
										task={task}
										setTasks={setTasks}
										onTaskUpdate={onTaskUpdate}
										onTaskDelete={onTaskDelete}
										key={task._id}
									/>
								))}
					</Col>
				</Row>
			</Col>
		</>
	);
};

export default Board;
