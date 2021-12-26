import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const TodoForm = () => {
	return (
		<Card>
			<Card.Body>
				<Form.Group className="mb-3">
					<Form.Label>New Todo</Form.Label>
					<Form.Control as="textarea" rows={3}></Form.Control>
				</Form.Group>
				<Button variant="primary">Add Todo</Button>
			</Card.Body>
		</Card>
	);
};

export default TodoForm;
