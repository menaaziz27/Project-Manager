import React from 'react';
import { Card, Col, ListGroup, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const TodoItem = () => {
	return (
		<Card className="mt-3 p-2">
			<ListGroup variant="flush">
				<ListGroup.Item>This is a new Todo</ListGroup.Item>
				<ListGroup.Item>
					<Row>
						<Col xs={4}>
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-tasks"></i>
								</Nav.Link>
							</LinkContainer>
						</Col>
						<Col xs={4}>
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-edit"></i>
								</Nav.Link>
							</LinkContainer>
						</Col>
						<Col xs={4}>
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-trash-alt"></i>
								</Nav.Link>
							</LinkContainer>
						</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
		</Card>
	);
};

export default TodoItem;
