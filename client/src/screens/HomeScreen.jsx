import React, { useEffect } from 'react';
import * as api from '../api';

const HomeScreen = () => {
	useEffect(() => {
		const getProjects = async () => {
			const { data } = await api.getProjects();
			console.log(data);
		};
		getProjects();
	}, []);
	return <div>HomeScreen</div>;
};

export default HomeScreen;
