import React from 'react'
import ImageUploaderComponent from "./Components/ImageUploaderComponent"
import DatePickerComponent from './Components/DatePickerComponent'
import DropdownComponent from './Components/DropdownComponent'
import { createMuiTheme, TableRow, TableCell, Table, ThemeProvider, TablePagination, TableBody, TableContainer, } from '@material-ui/core'
import './Style/tableFooter.css'
import { sumSummary, averageSummary } from './MaterialUtils'

  export const columns = [
  {
    title: 'Tenant ID',
    field: 'Tenant ID',
    editable: 'onAdd',
  },
  
  {
    title: 'Client',
    field: 'Client',
    defaultSort: 'asc'
  },

  {
    title: 'Photo Upload',
    field: 'Photo Upload',
    sorting: false,
    editable: 'never',
    cellStyle: {
      width: 200,
      minWidth: 200
    },
    headerStyle: {
      width: 200,
      minWidth: 200,

    },
    readonly: true,
    render: rowData => <ImageUploaderComponent></ImageUploaderComponent>
  },

  {
    title: 'Amount Due',
    field: 'Total Amount Due',
    type: 'numeric',
    sorting: true,

  },

  {
    title: 'Charge Type',
    field: 'Charge Type',
    lookup: { 34: 'Rent', 63: 'SCOA' },
    sorting: false,
  },

  {
    title: 'Amount Pending',
    field: 'Amount Pending',
    lookup: { 34: 'VOID', 63: 'COLLECTED' },
    hidden: false,
    readonly: false

  },

  {
    title: 'Date Of Invoice',
    field: 'Date Of Invoice',
    editable: 'never',
    readonly: true,
    sorting: false,
    render: rowData => <DatePickerComponent></DatePickerComponent>,

  },

  {
    title: 'Select Country',
    field: 'Select Country',
    editable: 'never',
    sorting: false,
    readonly: true,
    render: rowData => <DropdownComponent options={[
      'India', 'US', 'Japan'
    ]}></DropdownComponent>
  },

  {
    title: 'Collectible/Non Collectible',
    field: 'Collectible/Non Collectible',
    filtering: false,
    export: false,
  },
]

 export const options = {
  actionsColumnIndex: -1,
  filtering: false,
  grouping: false,
  exportButton: true,
  search: true,
  selection: true,
  sorting: true,
  selectionProps: rowData => ({
    disabled: rowData.Client === 'T2039',
    color: 'primary'
  }),
  headerStyle: {
    backgroundColor: '#F7F8F5',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: '25rem',
    zIndex:0,
  },
  cellStyle: {
    textAlign: 'center',
    fontSize: '1.1rem',
    padding: '3rem'
  },
  rowStyle: (rowData, index) => ({
    backgroundColor: index % 2 !== 0 ? "#F7F8F5" : "#FFF",
  }),
  columnStyle: {
    textAlign: 'center',
  },
  // searchFieldStyle:{
  //   border:'1px solid black'
  // }
}
 export const actions = [
  {
    tooltip: 'Remove All Selected Users',
    icon: 'delete',
    onClick: (evt, data) => alert('You want to delete ' +data.length + ' rows')
  }
]

export const overrideTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTablePagination: {
      // Name of the rule
      root: {
        fontSize: '1.3rem',
        color: "black",
      },
    },
    MuiTypography: {
      root: {
        fontSize: '1.3rem',
        color: "black",

      },
      caption: {
        fontSize: '1.3rem',
        color: "black",

      }
    },
    MuiButtonBase: {
      root: {
        width: "50px",
        height: "50px",
        size: "50px"
      }
    },
    MuiButton: {
      root: {
        width: "50px",
        height: "50px",
        size: "large"
      },
      iconSizeLarge: {
        size: 'large'
      }
    },

  },
});



let displaySum=[]
let displayAverage=[]

displaySum = sumSummary(1)
displayAverage= averageSummary(4)
 
 export const components = {
  
  Pagination: props => (

    <ThemeProvider theme={overrideTheme} >
      {
        displaySum.length!==0 ? 
        <div className="table-footr">
        <TableContainer >
        <Table>
          <TableBody>
          <TableRow className="Mtable-row">
            <TableCell colSpan={2} style={{ fontSize: '1rem', color: 'black', width: '180px' }}>{displaySum[0]} : Sum</TableCell>
            <TableCell align="right" style={{ fontSize: '1rem', color: 'black', width: '180px' }}>{displaySum[1]}</TableCell>
          </TableRow>
          
          </TableBody>
        </Table>
        </TableContainer>
      </div>:<div></div>
      }    
      {
        displayAverage.length!==0 ? 
        <div className="table-footr">       
        <TableContainer >
        <Table >
          <TableBody>
          <TableRow className="Mtable-row">
            <TableCell colSpan={2} style={{ fontSize: '1rem', color: 'black', width: '180px' }}>{displayAverage[0]} : Average</TableCell>
            <TableCell align="right" style={{ fontSize: '1rem', color: 'black', width: '180px' }}>{displayAverage[1]}</TableCell>
          </TableRow>
          
          </TableBody>
        </Table>
        </TableContainer>
      </div>:<div></div>
      }    
        <TablePagination
          {...props}
          rowsPerPageOptions={[3, 5, 10, 20, 30]} />    
    </ThemeProvider>
  )  
}

 
 

 
