import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../actions/project';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import Modal from 'react-modal';
import { notify } from '../../helper/toast';

const SideMenu = ({ project, setProject }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [projectForm, setProjectForm] = useState({
		title: project.title || '',
		description: project.description || '',
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onDelete = () => {
		dispatch(deleteProject(project._id));
		navigate('/');
	};

	const onUpdate = async e => {
		e.preventDefault();
		const { data } = await api.updateProject(project._id, projectForm);
		console.log(data);
		setProject(data);
		notify('Project updated successfully!');
		toggleModal();
	};

	const toggleModal = () => {
		setProjectForm({ title: project.title, description: project.description });
		setIsOpen(!isOpen);
	};

	return (
		<Col md={2} className="border rounded border-1">
			<Row className="p-3 d-flex justify-content-sm-between">
				<Col>
					<i className="fas fa-trash-alt p-1" onClick={onDelete}></i>
				</Col>
				<Col>
					<i className="fas fa-edit p-1" onClick={toggleModal}></i>
				</Col>
			</Row>
			<Row className="p-3">
				<h4>{project?.title}</h4>
			</Row>
			<Row className="p-3">
				<p>{project?.description}</p>
			</Row>
			<Modal
				isOpen={isOpen}
				onRequestClose={toggleModal}
				contentLabel="My dialog"
				className="mymodal"
				overlayClassName="myoverlay"
				closeTimeoutMS={500}
			>
				<form onSubmit={onUpdate}>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Title"
							value={projectForm?.title}
							onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
							className="w-100 p-1"
							autoFocus
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type="text"
							placeholder="Description"
							value={projectForm?.description}
							onChange={e => setProjectForm({ ...projectForm, description: e.target.value })}
							className="w-100 p-1"
						></Form.Control>
					</Form.Group>
					<Button type="submit" className="w-100 mt-3" onClick={onUpdate} disabled={!projectForm.title.trim()}>
						Create
					</Button>
				</form>
			</Modal>
		</Col>
	);
};

export default SideMenu;
