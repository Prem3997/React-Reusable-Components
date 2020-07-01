import React, { useState } from 'react';

import DragItem from '../../SharedComponents/Dtc-DragAndDrop/DragAndDropNew/components/drag-item'
import DropItem from '../../SharedComponents/Dtc-DragAndDrop/DragAndDropNew/components/drop-item'

import './styles.css';

const todos = {
	1: {
		text: 'download1.jpg',
		state: 'todo'
	},
	2: {
		text: 'download2.jpg',
		state: 'todo'
	},
	3: {
		text: 'download3.jpg',
		state: 'todo'
	},
	4: {
		text: 'download1.jpg',
		state: 'todo'
	}
};

function DragDropNew() {
	const [ todoValues, setValue ] = useState(todos);

	return (
		<div className="App">
			<div className="box">
				<DropItem
					heading="Group1"
					onDrop={(id) => {
						const currentTodo = { ...todoValues[id] };
						console.log(id, 'id');
						currentTodo.state = 'todo';
						setValue({ ...todoValues, ...{ [id]: currentTodo } });
					}}
				>
					{Object.keys(todoValues)
						.map((key) => ({ id: key, ...todoValues[key] }))
						.filter((todo) => todo.state === 'todo')
						.map((todo) => <DragItem id={todo.id} data={todo} img={true} key={todo.id} />)}
				</DropItem>
				<DropItem
					heading="Group2"
					onDrop={(id) => {
						const currentTodo = { ...todoValues[id] };
						currentTodo.state = 'wip';
						setValue({ ...todoValues, ...{ [id]: currentTodo } });
					}}
				>
					{Object.keys(todoValues)
						.map((key) => ({ id: key, ...todoValues[key] }))
						.filter((todo) => todo.state === 'wip')
						.map((todo) => <DragItem id={todo.id} data={todo} img={true} key={todo.id} />)}
				</DropItem>
				<DropItem
					heading="Group3"
					onDrop={(id) => {
						const currentTodo = { ...todoValues[id] };
						currentTodo.state = 'done';
						setValue({ ...todoValues, ...{ [id]: currentTodo } });
					}}
				>
					{Object.keys(todoValues)
						.map((key) => ({ id: key, ...todoValues[key] }))
						.filter((todo) => todo.state === 'done')
						.map((todo) => <DragItem id={todo.id} data={todo} img={true} key={todo.id} />)}
				</DropItem>
			</div>
		</div>
	);
}

export default DragDropNew;
