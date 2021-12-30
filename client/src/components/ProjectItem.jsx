import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectItem = ({ title, description, _id }) => {
	return (
		<Col as={Link} to={`/projects/${_id}`} sm={6} className="p-2 border-right border-bottom">
			<h4>{title}</h4>
			{description}
		</Col>
	);
};

export default ProjectItem;
