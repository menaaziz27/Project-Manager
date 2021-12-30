import React from 'react';
import { Col, Row } from 'react-bootstrap';

const SideMenu = ({ title, description }) => {
	return (
		<Col sm={2} className="border rounded border-1">
			<Row className="p-3">
				<h4>{title}</h4>
			</Row>
			<Row className="p-3">
				<p>{description}</p>
			</Row>
		</Col>
	);
};

export default SideMenu;
