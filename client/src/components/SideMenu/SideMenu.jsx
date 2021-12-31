import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../actions/project';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({ project, setProject }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onDelete = () => {
		// dispatch delete action from api and store and redirect to home
		dispatch(deleteProject(project._id));
		navigate('/');
	};
	const onUpdate = () => {
		// dispatch update action from api and update state to the newly one
		// dispatch(updateProject());
	};

	return (
		<Col sm={2} className="border rounded border-1">
			<Row className="p-3">
				<Col>
					<Button onClick={onDelete}>X</Button>
				</Col>
				<Col>
					<Button onClick={onUpdate}>update</Button>
				</Col>
			</Row>
			<Row className="p-3">
				<h4>{project?.title}</h4>
			</Row>
			<Row className="p-3">
				<p>{project?.description}</p>
			</Row>
		</Col>
	);
};

export default SideMenu;
