import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Tagsinput.css';
import closeicon from './Assets/close.svg';

function DtcTagsInput(props) {
	const [ items, setItems ] = useState(props.tags);
	const [ text, setText ] = useState('');

	useEffect(
		() => {
			props.tagsChange(items);
		},
		[ items, props ]
	);

	const keyPressed = (event) => {
		const value = event.target.value;
		if (event.key === 'Enter' && value.length > 0) {
			isUnique(value);
		}
		if (event.key === ',') {
			const item1 = value.substring(0, value.indexOf(','));
			if (item1.length !== 0) {
				isUnique(item1);
			}
		}
	};

	const isUnique = (value) => {
		if (props.unique) {
			items.includes(value) ? setText('') : setItems([ ...items, value ]);
			setText('');
		} else {
			setItems([ ...items, value ]);
			setText('');
		}
	};

	const char_count=(str, letter)=> {
		var letter_Count = 0;
		for (var position = 0; position < str.length; position++) {
			if (str.charAt(position) === letter) {
				letter_Count += 1;
			}
		}
		return letter_Count;
	}

	const deleteItem = (index) => {
		const array = items;
		array.splice(index, 1);
		setItems([ ...array ]);
	};

	const handleChange = (e) => {
		var count = char_count(e.target.value, props.pasteSplit);
		if (count > 1) {
			const inputText = e.target.value;
			var newItems = inputText.split(props.pasteSplit);
			if (props.unique) {
				let uniq = [ ...new Set(newItems) ];
				let difference = uniq.filter((x) => !items.includes(x));
				setItems([ ...items, ...difference ]);
				setText('');
			} else {
				setItems([ ...items, ...newItems ]);
				setText('');
			}
		} else {
			setText(e.target.value);
		}
		props.tagsChange(items)
	};

	return (
		<div className="tags-container">
			<input
				className="tags-input"
				onKeyUp={keyPressed}
				type="text"
				value={text}
				placeholder={props.placeholder}
				onChange={handleChange}
			/>
			<strong className="items-length">{items.length}</strong>
			{items.length !== 0 && (
				<div className="flex-container">
					{items.map((item, index) => (
						<li className="tag" key={index}>
							{item}
							<img className="close-icon" src={closeicon} alt='closeIcon' onClick={() => deleteItem(index)} />
						</li>
					))}
				</div>
			)}
		</div>
	);
}

export default DtcTagsInput;
DtcTagsInput.propTypes = {
	placeholder: PropTypes.string,
	pasteSplit: PropTypes.string,
	unique: PropTypes.bool,
	tags: PropTypes.array
};
DtcTagsInput.defaultProps = {
	placeholder: 'Add a tag',
	pasteSplit: ',',
	unique: true,
	tags: []
};
