import React, { useState } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ModalComponent from './ModalComponent';
import * as api from '../api';

const TodoItem = ({ task, onTaskDelete, setTasks }) => {
	const [show, setShow] = useState(false);

	const handleClose = content => {
		onTaskUpdate(content);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const { id: projectId } = useParams();

	const onTaskUpdate = async content => {
		const { data } = await api.updateTask(task._id, { content });
		setTasks(prevState => prevState.map(task => (task._id !== data._id ? task : data)));
	};
	return (
		<Card className="mt-3 p-2">
			<ListGroup variant="flush">
				<ListGroup.Item>{task.content}</ListGroup.Item>
				<ListGroup.Item className="removePadding center">
					<Row>
						<Col xs={4} className=" d-flex justify-content-center">
							<i className="fas fa-tasks p-1"></i>
						</Col>
						<Col xs={4} className=" d-flex justify-content-center">
							<i className="fas fa-edit p-1" onClick={handleShow}></i>
						</Col>
						<Col xs={4} className=" d-flex justify-content-center">
							<i className="fas fa-trash-alt p-1" onClick={() => onTaskDelete(task._id)}></i>
						</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
			<ModalComponent handleClose={handleClose} show={show} task={task} centered={true} />
		</Card>
	);
};

export default TodoItem;
