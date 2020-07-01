import React from 'react'
import useMediaQuery from 'react-use-media-query-hook';
import EnhancedTableComponent from './EnhancedTableComponent';
const DtcReactTable = (props) => {
  const columns = props.tableColumn

  const [data, setData] = React.useState(props.tableData)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
    const isLaptop = useMediaQuery('(width: 1600px)');
    const isLaptopBig = useMediaQuery('(min-width: 2880px)');
    const isMobile = useMediaQuery('(max-width: 575px)')
    var myDivStyle={}
    if(isLaptop){
        myDivStyle={
            marginLeft:"25rem",
            width:"80%"
        }
    }
    else if(isLaptopBig){
        myDivStyle={
            marginLeft:"17%",
            width:"80%"
        }
    }
    else if(isMobile){
      myDivStyle={
        width: "90%",
        margin: "0 auto"
      }
    }
    else{
      myDivStyle={
        marginLeft:"16%",
        width:"80%"
      }
    }

  return (
    <div style={myDivStyle}>
      <EnhancedTableComponent
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  )
}

export default DtcReactTable
