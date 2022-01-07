import React, { useState } from 'react';
import { searchProject } from '../../actions/project';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
	const [term, setTerm] = useState('');
	const dispatch = useDispatch();
	const onTermChange = e => {
		setTerm(e.target.value);
		dispatch(searchProject(term));
	};

	return (
		<div>
			<input type="text" className="w-100" placeholder="project search" value={term} onChange={onTermChange} />
		</div>
	);
};

export default SearchBar;
