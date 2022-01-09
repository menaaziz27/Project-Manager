import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProjectItem from './ProjectItem/ProjectItem';

const ProjectList = () => {
	const projects = useSelector(state => state.projectsData.projects);
	const term = useSelector(state => state.projectsData.term);

	return (
		<Col sm={10}>
			{projects && projects.length === 0 ? (
				<h3>Go create some projects!</h3>
			) : (
				<Row className=" border border-1">
					{projects &&
						projects?.map(project => (
							<ProjectItem
								title={project.title}
								description={project.description}
								_id={project._id}
								key={project._id}
							/>
						))}
				</Row>
			)}
		</Col>
	);
};

export default ProjectList;
