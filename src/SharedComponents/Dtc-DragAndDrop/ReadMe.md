<h1 align='center'>Drag And Drop</h1>

## Method1

## Installation guidelines/steps

copy the DragAndDrop from Dtc-DragAndDrop folder.<br/>

## Sample props data

const data = [
	{ title: 'Todo', items: [ '1', '2', '3' ] },
	{ title: 'Inprogress', items: [ '4', '5' ] },
	{ title: 'Done', items: [ '6', '7', '8' ] }
];

## How to use the Component(brief)

-pass the data prop to the component.<br/>
-To make any group undroppable pass the title name as props from blockGroup.<br/>
-Refer the DragDrop.js example.

## Method2

## Installation guidelines/steps

copy the DragAndDropNew from Dtc-DragAndDrop folder.<br/>

## Sample props data
const todos = {
	1: {
		text: 'download1.jpg',
		state: 'todo'
	},
	2: {
		text: 'download2.jpg',
		state: 'todo'
	}
}

## How to use the Component(brief)

-To make any area droppable wrap it with DropItem tag<br/>
-To make any item draggable pass the data to DragItem tag along with id.<br/>
-pass the data and id props from DragItem component.</br>
-pass the heading of the group from DropItem component.</br>
-on dropping any item to the group onDrop property will trigger.<br/>
-To make more customizations change the view files in DragAndDropNew folder.<br/>
-Refer the DragDropNew.js example.



