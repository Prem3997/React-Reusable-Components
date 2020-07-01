## Library/PackageName
Material-ui,React-table

## Library/PackageVersion
"@material-ui/core": "^4.9.9"
"@material-ui/icons": "^4.9.1"
"react-table": "^7.0.4"

## Library/PackageLicense

## Installation guidelines/steps

Copy the Enhanced Folder
Install the packages @material-ui/core,@material-ui/icons,react-table

## Sample Configuration JSON FILE
export const tableColumn =[ {
    Header: 'Tenant ID',
    accessor: 'TenantID',
    Footer:'Tenant ID',
  }]

## Sample Source/Data Json File
export const tableData = [
    {'TenantID': '840', 'Client': 'T2039', 'TotalAmountDue': '65000','Charge Type':'Rent','amountPending':'Collectible', 'amountPaid':'2300','Payment Status':'Collected'},
    {'TenantID': '8E40', 'Client': 'T2D39', 'TotalAmountDue': '55000','Charge Type':'Rent','amountPending':'Collectible','amountPaid':'300'},
    ];

## How to use React-Table
import the enhanced table
import {tableData} from './TableData' <br>
import {tableColumn} from './TableProps' <br>
send the fields as props 
< DtcReactTable 
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
/>
