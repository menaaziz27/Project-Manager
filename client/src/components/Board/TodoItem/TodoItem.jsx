import React, { useState } from 'react';
import { Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import ModalComponent from '../../Modal/ModalComponent';

const TodoItem = ({ task, onTaskDelete, onTaskUpdate }) => {
	const [show, setShow] = useState(false);
	const [textInput, setTextInput] = useState(task.content || null);
	const [status, setStatus] = useState(task.status || null);

	const handleSave = () => {
		onTaskUpdate(task, textInput, status);
		setShow(false);
	};

	const onEditHandler = () => {
		setShow(prevState => !prevState);
	};

	return (
		<Card className="mt-3 p-2">
			<ListGroup variant="flush">
				<ListGroup.Item>{task.content}</ListGroup.Item>
				<ListGroup.Item className="removePadding center">
					<Row>
						<Col xs={6} className=" d-flex justify-content-center">
							<i className="fas fa-edit p-1" onClick={onEditHandler}></i>
						</Col>
						<Col xs={6} className=" d-flex justify-content-center">
							<i className="fas fa-trash-alt p-1" onClick={() => onTaskDelete(task._id)}></i>
						</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
			<ModalComponent handleSave={handleSave} show={show} setShow={setShow} task={task} centered={true}>
				<form>
					<textarea
						name="content"
						id="content"
						rows="3"
						onChange={e => setTextInput(e.target.value)}
						value={textInput}
						className="w-100 p-1"
					></textarea>
					<Form.Select onChange={e => setStatus(e.target.value)} value={status} aria-label="Default select example">
						<option value="TODO">Todo</option>
						<option value="IN_PROGRESS">In Progress</option>
						<option value="DONE">Done</option>
					</Form.Select>
				</form>
			</ModalComponent>
		</Card>
	);
};

export default TodoItem;
