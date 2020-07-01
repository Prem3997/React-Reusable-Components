import React from 'react'
import DtcTreeView from '../../SharedComponents/Dtc-Tree-View/DtcTreeView'
import { products } from './data.js';

export const TreeView = () => {
    return (
        <div>
            <DtcTreeView
                products={products}
            />
        </div>
    )
}
