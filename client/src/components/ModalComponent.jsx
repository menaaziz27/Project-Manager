import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalComponent = ({ task, handleClose, show }) => {
	const [taskContent, setTaskContent] = useState(task.content || '');
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Task Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<textarea
							name="content"
							id="content"
							rows="3"
							onChange={e => setTaskContent(e.target.value)}
							value={taskContent}
							style={{ 'width': '100%', 'padding': '4px' }}
						></textarea>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => handleClose()}>
						Close
					</Button>
					<Button variant="primary" onClick={() => handleClose(taskContent)}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalComponent;
