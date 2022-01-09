import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
	const [keyword, setKeyword] = useState('');
	const navigate = useNavigate();

	const onSubmitHandler = e => {
		e.preventDefault();

		if (keyword.trim()) {
			navigate(`/search?q=${keyword}`);
		} else {
			navigate('/');
		}
	};

	return (
		<Form onSubmit={onSubmitHandler} inline className="d-flex align-items-center flex-grow-1 mx-lg-5 my-sm-3 my-0">
			<Form.Control
				type="text"
				name="q"
				placeholder="search project"
				onChange={e => setKeyword(e.target.value)}
				className="mr-sm-2 ml-sm-5"
			></Form.Control>
			<Button type="submit" variant="outline-success d-none d-md-block">
				Search
			</Button>
		</Form>
	);
};

export default SearchBox;
