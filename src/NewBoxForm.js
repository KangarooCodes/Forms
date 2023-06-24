import React, { Fragment, useState } from 'react';
import './NewBoxForm.css';
import Box from './Box';

const NewBoxForm = () => {
	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');
	const [bgcolor, setBgcolor] = useState('');

	const handleWidthChange = (e) => {
		setWidth(e.target.value)
		console.log(e.target.value)
	}
	const handleHeightChange = (e) => {
		setHeight(e.target.value)
		console.log(e.target.value)
	}
	const handleBgcolorChange = (e) => {
		setBgcolor(e.target.value)
		console.log(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setWidth('');
		setHeight('');
		setBgcolor('');
	};

	const remove = () => {
		setWidth('');
		setHeight('');
		setBgcolor('');
	}

	return (
		<Fragment>
	<form className='NewBoxForm' onSubmit={handleSubmit}>

		<label htmlFor='bgcolor'></label>
		<input
		id='bgcolor'
		placeholder='background color'
		name='bgcolor'
		value={bgcolor}
		onChange={handleBgcolorChange}
		/>

		<label htmlFor='width'></label>
		<input
		id='width'
		placeholder='Width (px)'
		name='width'
		value={width}
		onChange={handleWidthChange}
		/>

		<label htmlFor='height'></label>
		<input
		id='height'
		placeholder='Height (px)'
		name='height'
		value={height}
		onChange={handleHeightChange}
		/>
	</form>
	<button className='Box-Remove' onClick={remove}>Remove Box</button>
	<div>
		<Box
		width={`${width}`}
		height={`${height}`}
		bgcolor={`${bgcolor}`}
		/>
	</div>
	</Fragment>
	)
}

export default NewBoxForm;