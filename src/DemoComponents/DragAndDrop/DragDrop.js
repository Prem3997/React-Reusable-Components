import React from 'react';

import DtcDragNDrop from '../../SharedComponents/Dtc-DragAndDrop/DragAndDrop/DtcDragNDrop';

import './styles.css'
import DragDropNew from './DragDropNew';

const data = [
	{ title: 'Todo', items: [ '1', '2', '3' ] },
	{ title: 'Inprogress', items: [ '4', '5' ] },
	{ title: 'Done', items: [ '6', '7', '8' ] }
];

function DragDrop(props) {
	return (
		<div className="dragNdrop-heading">
			<h2 className="ex-heading">
				EXAMPLE1 (Data can be moved from inprogress-list to done-list, but not from inprogress-list to
				todo-list)
			</h2>
			<div>
				<DtcDragNDrop data={data} blockGroup="Todo" />
			</div>
			<h2 className="ex-heading">Example2(Images can be dragged from one group to another)</h2>
			<div className="drag-drop-new">
				<DragDropNew></DragDropNew>
			</div>
		</div>
	);
}

export default DragDrop;
