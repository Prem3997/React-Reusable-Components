import React from 'react'
import './page-header-styles.css'
export default function DtcPageHeader(props) {
    return (
        <div>
            <h1 className="page-header"><b>{props.header}</b></h1>
        </div>
    )
}
