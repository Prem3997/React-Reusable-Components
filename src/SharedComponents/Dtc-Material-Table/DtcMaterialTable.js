import React, { useState } from 'react';
import MaterialTable from 'material-table';

import PropTypes from 'prop-types';

export default function DtcMaterialTable(props) {
  
  const [state, setState] =useState({
    columns: props.columns,
    data:props.data,
    options:props.options,
    actions:props.actions,
    components:props.components,
  });
  let editable={
    onRowAdd: (newData) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          setState((prevState) => {
            const data = [...prevState.data];
            data.push(newData);
            return { ...prevState, data };
          });
        }, 600);
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          if (oldData) {
            setState((prevState) => {
              const data = [...prevState.data];
              data[data.indexOf(oldData)] = newData;
              return { ...prevState, data };
            });
          }
        }, 600);
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          setState((prevState) => {
            const data = [...prevState.data];
            data.splice(data.indexOf(oldData), 1);
            return { ...prevState, data };
          });
        }, 600);
      }),
  }
  
  return (
    <MaterialTable
      title="Material Table"
      columns={state.columns}
      data={state.data}
      options={state.options}
      editable={editable}
      actions={state.actions}
      components={state.components}

    />
  );
}
DtcMaterialTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  options: PropTypes.object,
  editable: PropTypes.object,
  functions: PropTypes.object,
  components:PropTypes.object
};