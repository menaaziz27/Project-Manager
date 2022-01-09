import React, { useState, useEffect } from 'react';
import { searchProject } from '../../actions/project';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../api';

const SearchBar = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		if (term && !results.length) {
			dispatch(searchProject(term));
		} else {
			const timerId = setTimeout(() => {
				if (term) {
					dispatch(searchProject(term));
				}
			}, 500);
			return () => clearTimeout(timerId);
		}
	}, [term]);

	const onTermChange = e => {
		setTerm(e.target.value);
	};

	return (
		<div>
			<input type="text" className="w-100" placeholder="project search" value={term} onChange={onTermChange} />
		</div>
	);
};

export default SearchBar;
