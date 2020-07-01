<h1 align='center'>SELECT AND LIST</h1>

## Library/PackageName
react-select

## Library/PackageVersion
"react-select": "^3.1.0"

## Installation guidelines/steps

Copy the Select-And-List Folder<br/>
Install the package react-select<br/>

## Sample Configuration JSON FILE

 export var SelectAndListData={ <br/>
    "options":[ <br/>
        { "label":"Person1","id":1,"collaborator":"Person1", "role":"developer","collaboratorId":1,"isPresenter":false,"sessionId": "00000000-0000-0000-0000-000000000000" }, <br/>
        {"label":"Person2","id":2,"collaborator":"Person2","role":"developer","collaboratorId":2,"isPresenter":false,"sessionId": "00000000-0000-0000-0000-000000000000" } <br/>
    ] <br/>
}<br/>

Note: Here, label is the mandatory field (options for select box) <br/>

## Sample Props data

export const selectListProps = { <br/>
    show: ["id","collaborator","role","collaboratorId","isPresenter","sessionId"], <br/>
    checkboxvalue:"isPresenter", <br/>
    checkboxname:"Presenter", <br/>
    checkbox : true, <br/>
    displaybox: ["collaborator","role"], <br/>
    preloaded: 1 <br/>
} <br/>

- show: Represents whatever data to display<br/>
Eg: If you want only "collaborator" and "role", give only those two props.
- checkbox: If you want checkbox to display, then give checkbox props to true else give false.
- checkboxvalue: This represents which attribute should be the checkbox value.
- checkboxname: This denotes the name of the checkbox.
- displaybox: This props denotes the value to be displayed in the displaybox. You can give whatever the attribute to get displayed(In rectangular box)
- preloaded: Preloaded data to get displayed.<br/>
Eg: No preloaded - 0<br/>
    Two preloaded - 2 etc..<br/>
    

## How to use the Component

import react-select <br/>
import { SelectAndListData, selectListProps, images } from './SelectAndListProps'; <br/>
send the fields as props  <br/>
 <DtcSelectAndList SelectAndListData={SelectAndListData}  
           selectedList={selectListProps} images={images}/>  <br/>

## Component Description

- The data of selected options can be displayed as a list from the select box.
- List contains the checkbox for individual labels. 
- List can be added and deleted.

## How to use the Component(brief)

- Copy the Select-And-List folder and install react-select.​
- The data to get displayed,the option whether the checkbox is to displayed or not, checkbox name and the checkbox value is passed as props to the component. ​
- By default the list shows only the first option as a preloaded state. This can be customized using preloaded prop.
- Pass the necessary props from Select and list props Component.​
- Pass label as a field from the Select and list data props that should be mandatory for the select box options. Pass the remaining required fields.
- Add and delete are the images that can be changed in the image folder.
- Styling can be changed through Select and List css file.