import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const TodoForm = ({ onTaskCreate }) => {
	const [content, setContent] = useState('');
	return (
		<Card>
			<Card.Body>
				<Form.Group className="mb-3">
					<Form.Label>New Todo</Form.Label>
					<Form.Control as="textarea" rows={3} onChange={e => setContent(e.target.value)}></Form.Control>
				</Form.Group>
				<Button variant="primary" onClick={() => onTaskCreate(content)}>
					Add Todo
				</Button>
			</Card.Body>
		</Card>
	);
};

export default TodoForm;
