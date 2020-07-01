## Muti-Select

## Library/PackageName
Material-Table

## Library/PackageVersion
"material-table": "^1.57.2",

## Library/PackageLicense

## Installation guidelines/steps

Copy the Multi-select Folder
Install the package material-table

## Sample Configuration JSON FILE
  export const columns=[
    { title: 'Category', field: 'category' },
    { title: 'Age', field: 'age' },
  ]

  export const parentChildData=(row, rows) => rows.find(a => a.id === row.parentId)
  parentId is the dependentId

## Sample Source/Data Json File
export const data=[
    {
      id: 1,
      category: 'Child',
    },
    {
      id:1.2,
      age: '6-11',
      parentId:1
    },
]

## How to use MultiSelect-Table
import the Multiselect table
import {data,columns,parentChildData,myDivStyle,selectedRowColor} from './MultiSelectProps'
send the fields as props 
< MultiSelectComponent 
            data={data} 
            columns={columns} 
            myDivStyle={myDivStyle}
            selectedRowColor={selectedRowColor} 
            parentChildData={parentChildData}/>