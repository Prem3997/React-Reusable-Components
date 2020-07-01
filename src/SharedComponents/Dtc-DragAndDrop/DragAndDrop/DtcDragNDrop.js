import React, { useState, useRef } from 'react';
import './DragNDrop.css';
function DtcDragNDrop({ data, blockGroup, img}) {
	const [ list, setList ] = useState(data);
	const [ dragging, setDragging ] = useState(false);
	const dragItem = useRef();
	const dragNode = useRef();

	const handleDragStart = (e, params) => {
		dragItem.current = params;
        dragNode.current = e.target;
		dragNode.current.addEventListener('dragend', handleDragEnd);
		setTimeout(() => {
			setDragging(true);
		}, 0);
    };
    
	const handleDragEnd = () => {
		dragNode.current.removeEventListener('dragend', handleDragEnd);
		dragItem.current = null;
		dragNode.current = null;
		setDragging(false);
	};

	const handleDragEnter = (e, params) => {
        const currentItem = dragItem.current;
        if(blockGroup === params.grp.title){
            return null
        }
		if (e.target !== dragNode.current) {
			setList((oldList) => {
				let newList = JSON.parse(JSON.stringify(oldList));
				newList[params.grpI].items.splice(
					params.itemI,
					0,
					newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
				);
				dragItem.current = params;
				return newList;
			});
        }
    
	};

	const getStyles = (params) => {
		const currentItem = dragItem.current;
		if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) return 'current dnd-item';
		return 'dnd-item';
    };
    
	return (
		<div className="drag-drop-header">
			<div className="drag-n-drop">
				{list.map((grp, grpI) => (
					<div
						key={grp.title}
						className="dnd-group"
						onDragEnter={
							dragging && !grp.items.length ? (e) => handleDragEnter(e, { grp,grpI, itemI: 0 }) : null
						}
					>
						<div className="group-title">{grp.title}</div>
						{grp.items.map((item, itemI) => (
							<div
								draggable
								onDragStart={(e) => {
									handleDragStart(e, { grpI, itemI });
								}}
								key={item}
								onDragEnter={
									dragging ? (
										(e) => {
											handleDragEnter(e, {grp, grpI, itemI });
										}
									) : null
								}
								className={dragging ? getStyles({ grpI, itemI }) : 'dnd-item'}
							>
								{item}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default DtcDragNDrop;
