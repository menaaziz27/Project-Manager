import React from 'react';
import { Card, Col, ListGroup, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TodoItem = ({ task }) => {
	const { id: projectId } = useParams();
	// const [task, setTask] = useState();

	return (
		<Card className="mt-3 p-2">
			<ListGroup variant="flush">
				<ListGroup.Item>{task.content}</ListGroup.Item>
				<ListGroup.Item className="removePadding center">
					<Row>
						<Col xs={4} className=" d-flex justify-content-center">
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-tasks"></i>
								</Nav.Link>
							</LinkContainer>
						</Col>
						<Col xs={4} className=" d-flex justify-content-center">
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-edit"></i>
								</Nav.Link>
							</LinkContainer>
						</Col>
						<Col xs={4} className=" d-flex justify-content-center">
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
