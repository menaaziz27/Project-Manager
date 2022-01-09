import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectItem = ({ title, description, _id }) => {
	return (
		<Col sm={6} className="p-2 border-bottom border-end">
			<Link to={`/projects/${_id}`} className="text-decoration-none">
				<h4>{title}</h4>
			</Link>
			{description}
		</Col>
	);
};

export default ProjectItem;
