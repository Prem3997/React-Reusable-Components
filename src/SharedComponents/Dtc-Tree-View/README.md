# Tree View

## Library/PackageName
devextreme-react

## Library/PackageVersion
devextreme-react: "^19.2.7",

## Library/PackageLicense

## Installation guidelines/steps

Copy the TreeView Folder
Install  devextreme-react

## Sample Configuration  FILE
### Give the data in data.js file(initial data can be added here)
Pass the data to DtcTreeView.js file:<br/>
            data example<br/>
            export const products = [{  
                id: '1_1_1',  
                text: 'Video Players',  
                items: [{   
                id: '1_1_1_1',
                text: 'HD Video Player',
                price: 220
                }, {
                id: '1_1_1_2',
                text: 'SuperHD Video Player',
                price: 270
                }]
            }] <br/>

## Usage
Ex:<br/>
1.Send the data into items props.<br/>
< TreeView  
    id="treeview"
    items={data}
    width={500}
    searchMode={value}
    searchEnabled={true}
    selectByClick={true}
    showCheckBoxesMode="none"
    onItemSelectionChanged={selectionChanged}
    itemRender={renderTreeViewItem}
    onSelectAllValueChanged={onSelectAllValueChanged}
/><br/>

- width: Give the width values
- searchMode: If searchEnabled is true, then this is the mode for search. Here value is the select box value. Eg: contains, startswith
- searchEnabled: Flag for Search button
- selectByClick: Flag for selcting the data on click
- showCheckBoxesMode: Enable/disable the check boxes for selection 
Eg:'normal', 'selectAll', 'none'
- onItemSelectionChanged: function that selects the item/items on clicking (select the item for the item is single or an array)
- itemRender: utils on how to display the item(Eg:text+price or only price etc..)
- onSelectAllValueChanged: function that pushes the selected items into checked items

Button for Expand all, collapse all, select all and remove all<br/>
< Button
    width={120}
    text="Expand All"
    type="normal"
    stylingMode="contained"
    onClick={onExpandAllClick}
 />

- type: Button type 
 ex: normal, success, default<br/>
- stylingMode: Styling type
ex: conatined, outlined, text<br/>

The SelectBox widget allows to select an item from a drop-down list<br/>
< SelectBox style={{ width: '200px' }}
    items={options}
    value={value}
    onValueChanged={valueChanged}
/>

- items : Specifies an array of items displayed in the SelectBox.
- value: Selectbox value
- onValueChanged :event handler to perform an action when a user chooses a new value.

The List is a widget that represents a collection of items in a scrollable list.<br/>
< List
    id="checked-items"
    width={400}
    height={300}    
    items={state.checkedItems}
    itemRender={renderListItem}
/>

- items: An array of items displayed by the widget.
- itemRender: utils to display the items in particular format


## How to use(in short)
​1.Copy the Tree-View folder and install the dependencies.​<br/>
​2.Import TreeView, send the data and the required props.<br/>
3.If other props required, refer devextreme-react official documentation.