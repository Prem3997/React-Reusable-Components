import React from 'react';
import { options, columns, actions, components} from './TableProps';
import data from './TableData.json'
import DtcMaterialTable from '../../SharedComponents/Dtc-Material-Table/DtcMaterialTable';
import './style.scss'

function MaterialTableIndex(props) {
    return (
        <div className="material-table">
            <DtcMaterialTable data={data.data} options={options} columns={columns} actions={actions} components={components}></DtcMaterialTable>
        </div>
    );
}

export default MaterialTableIndex;