import React, { useState } from 'react';
import { Button, Card, Col, Form, FormControl, FormGroup, ListGroup, Row } from 'react-bootstrap';
import Modal from 'react-modal';

const TodoItem = ({ task, onTaskDelete, onTaskUpdate }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [textInput, setTextInput] = useState(task.content || null);
	const [status, setStatus] = useState(task.status || null);

	const handleSave = () => {
		onTaskUpdate(task, textInput, status);
		setIsOpen(!isOpen);
	};

	const toggleModal = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			setTextInput(task.content);
		}
	};

	return (
		<Card className="mt-3 p-2">
			<ListGroup variant="flush">
				<ListGroup.Item>{task.content}</ListGroup.Item>
				<ListGroup.Item className="removePadding center">
					<Row>
						<Col xs={6} className="d-flex justify-content-center">
							<i className="fas fa-edit p-1" onClick={toggleModal}></i>
						</Col>
						<Col xs={6} className="d-flex justify-content-center">
							<i className="fas fa-trash-alt p-1" onClick={() => onTaskDelete(task._id)}></i>
						</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
			<Modal
				isOpen={isOpen}
				onRequestClose={toggleModal}
				contentLabel="My dialog"
				className="mymodal"
				overlayClassName="myoverlay"
				closeTimeoutMS={500}
			>
				<form className="m-3">
					<FormGroup>
						<FormControl
							type="text"
							name="content"
							id="content"
							onChange={e => setTextInput(e.target.value)}
							value={textInput}
							className="w-100 p-1 my-3"
							autoFocus
						></FormControl>
					</FormGroup>
					<Form.Select onChange={e => setStatus(e.target.value)} value={status}>
						<option value="TODO">Todo</option>
						<option value="IN_PROGRESS">In Progress</option>
						<option value="DONE">Done</option>
					</Form.Select>
					<Button onClick={handleSave} className="w-100 mt-2">
						Edit
					</Button>
				</form>
			</Modal>
		</Card>
	);
};

export default TodoItem;
