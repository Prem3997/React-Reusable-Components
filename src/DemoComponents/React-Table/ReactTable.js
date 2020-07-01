import React from 'react'
import DtcReactTable from '../../SharedComponents/Dtc-React-Table/DtcReactTable'
import { tableData } from './TableData'
import { tableColumn } from './TableProps'
const ReactTable = () => {
    return (
        <div>
            <DtcReactTable
                tableData={tableData}
                tableColumn={tableColumn}
            />
        </div>
    )
}

export default ReactTable
