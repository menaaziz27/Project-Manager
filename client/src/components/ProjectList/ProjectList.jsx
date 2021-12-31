import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProjectItem from '../ProjectItem';

const ProjectList = () => {
	const projects = useSelector(state => state.projects);
	return (
		<Col sm={10}>
			{projects.length === 0 ? (
				<h3>Go create some projects!</h3>
			) : (
				<Row className="p-3 border border-1">
					{projects.map(project => (
						<ProjectItem title={project.title} description={project.description} _id={project._id} key={project._id} />
					))}
				</Row>
			)}
		</Col>
	);
};

export default ProjectList;
