import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const TodoForm = ({ onTaskCreate }) => {
	const [content, setContent] = useState('');

	const addHandler = () => {
		onTaskCreate(content);
		setContent('');
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title className="mb-3">New Todo</Card.Title>
				<textarea
					as="textarea"
					rows={3}
					className="w-100 p-1"
					value={content}
					onChange={e => setContent(e.target.value)}
				></textarea>
				<Button variant="primary" className="d-block" onClick={addHandler} disabled={!content || !content.trim()}>
					Add Todo
				</Button>
			</Card.Body>
		</Card>
	);
};

export default TodoForm;
