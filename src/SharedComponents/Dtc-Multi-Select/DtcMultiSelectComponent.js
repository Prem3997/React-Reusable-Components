import React from 'react';
import MaterialTable from 'material-table';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {unique} from './Utils'
export default function DtcMultiSelectComponent(props) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#b5b3b3',
      },
      secondary: {
        main: '#0a0a0a',
      },
    },

  });

  const [state] = React.useState({
    columns: props.columns,
    data:props.data,
    parentChildData:props.parentChildData,
    myDivStyle:props.myDivStyle,
    selectedRowColor:props.selectedRowColor
  });

  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
      style={state.myDivStyle}
      title="Multi-Select"
      columns={state.columns}
      data={state.data}
      parentChildData={state.parentChildData}
      options={{
        selection: true,
        paging: false,
        sorting:false,
        showTextRowsSelected: false,
        rowStyle: rowData => ({ backgroundColor: rowData.tableData.checked ? state.selectedRowColor : '' })
      }}
      onSelectionChange={(rows) => console.log(unique(rows))}
    />
    </MuiThemeProvider>
  );
}