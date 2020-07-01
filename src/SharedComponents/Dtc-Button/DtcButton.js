import React from 'react'
import './DtcButtonStyles.css'
import { Button } from 'react-bootstrap'
export const DtcButton = (props) => {
    return (
        <div>
            <Button
                style={props.style}
                className={props.className}
                onClick={props.onClick}
            >
                {props.buttonLabel}
            </Button>
        </div>
    )
}
