## Library/PackageName
Material-Table

## Library/PackageVersion
"material-table": "^1.57.2",

## Library/PackageLicense
MIT license

## Installation guidelines/steps

Copy the Dtc-Material-Table Folder
1.Install package
    Install  material-table and @material-ui/core
2.Add material icons
    There are two ways to use icons in material-table either import the material icons font via html OR import material icons and use the material-table icons prop.

    HTML:

    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

    Import Material icons:

    Icons can be imported to be used in material-table offering more flexibility for customising the look and feel of material table over using a font library.

    install @material-ui/icons and import them in the following way
    import { AddBox, ArrowDownward } from "@material-ui/icons";

## Sample Configuration JSON FILE
export const columns=[
    { title: 'Category', field: 'category' },
    { title: 'Age', field: 'age' },
]
export const options = {
  actionsColumnIndex: -1,
  filtering: false,
  grouping: false,
  exportButton: true,
  search: true,
  selection: true,
  sorting: true,
}
export const actions = [
  {
    tooltip: 'Remove All Selected Users',
    icon: 'delete',
    onClick: (evt, data) => alert('You want to delete ' +data.length + ' rows')
  }
]

To display the sum and/or average of any column 
    1.Call the function sumSummary and averageSummary (in TableProps.js file : /src/DemoComponents/  Material-Table/TableProps) by passing the column number as parameter (these function is in MaterialUtils.js):
        let displaySum=[]
        let displayAverage=[]

        displaySum = sumSummary(1)
        displayAverage= averageSummary(4)
    2.Override the pagination component to display the summary of the column:

        export const components = {
            Pagination: props => (
                <ThemeProvider theme={overrideTheme} >
                    <div>
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
                    </div>    
                        <TablePagination
                        {...props}
                        rowsPerPageOptions={[3, 5, 10, 20, 30]} />    
                    </ThemeProvider>
            )  
        }

## Sample Source/Data Json File
"data":[
    {"Tenant ID": 840, "Client": "T2039", "Total Amount Due": 65000,"Charge Type":34,"Amount Pending":34},
    {"Tenant ID": 740, "Client": "T20569", "Total Amount Due": 68000,"Charge Type":34,"Amount Pending":63},
    {"Tenant ID": 8450, "Client": "T20y6", "Total Amount Due": 55000,"Charge Type":63,"Amount Pending":34}
]


## How to use Material-Table
1.Copy the Dtc-Material-Table folder 
2.Install material-table and @material-ui/core 
3.data, columns, options and components  has to be passed as props to DtcMaterialTable.js file
    <DtcMaterialTable data={data.data} options={options} columns={columns} actions={actions} components={components}></DtcMaterialTable>
4.Refer TableProps.js file (configuration file) in Material-Table folder (/src/DemoComponents/Material-Table/TableProps)
