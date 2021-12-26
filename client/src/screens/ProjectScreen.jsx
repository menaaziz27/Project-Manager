import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

const ProjectScreen = () => {
	return (
		<Row className="container-fluid" style={{ 'minHeight': 'calc(100vh - 72px' }}>
			<Col sm={2} className="border rounded border-1">
				side bar
			</Col>

			<Col sm={10} style={{ 'minHeight': '100%' }}>
				<Row className="h-100">
					<Col sm={4} className="border rounded border-1" style={{ 'overFlow': 'scroll', 'height': '100%' }}>
						<h4>Todos</h4>
						<TodoForm />
						<TodoItem />
						<TodoItem />
						<TodoItem />
						<TodoItem />
						{/* map throw all todos and render todoitem for each loop */}
					</Col>
					<Col sm={4} className="border rounded border-1" style={{ 'overFlow': 'scroll', 'height': '100%' }}>
						<h4>In progress</h4>
					</Col>
					<Col sm={4} className="border rounded border-1" style={{ 'overFlow': 'scroll', 'height': '100%' }}>
						<h4>Done</h4>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default ProjectScreen;
