import React from 'react'
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton'
import './ButtonStyles.css'

export const ButtonDemo = () => {
    const onButtonClicked=()=>{
        
    }
    return (
        <div>
            <DtcButton
                className='dtc-primary-whiteBg'
                onClick={onButtonClicked}
                buttonLabel='Primary White Bg'
            /><br></br>
            <DtcButton
                className='dtc-secondary-whiteBg'
                onClick={onButtonClicked}
                buttonLabel='Secondary  White Bg'
            /><br></br>
            <DtcButton
                className='dtc-secondary-outline-whiteBg'
                onClick={onButtonClicked}
                buttonLabel='Seconday Outline White Bg'
            /><br></br>
            <DtcButton
                className='dtc-disabled'
                onClick={onButtonClicked}
                buttonLabel='Disabled'
            /><br></br>
            <DtcButton
                className='dtc-disabled-outline'
                onClick={onButtonClicked}
                buttonLabel='Disabled Outline'
            /><br></br>
            <div className='button-outline'>
                <br></br>
                <DtcButton
                    className='dtc-primary-blackBg'
                    onClick={onButtonClicked}
                    buttonLabel='Primary Black Bg'
                /><br></br>
                <DtcButton
                    className='dtc-secondary-blackBg'
                    onClick={onButtonClicked}
                    buttonLabel='Secondary Black Bg'
                /><br></br>
                <DtcButton
                    className='dtc-secondary-outline-blackBg'
                    onClick={onButtonClicked}
                    buttonLabel='Secondary Outline Black Bg'
                /><br></br>
                <DtcButton
                    className='dtc-disabled'
                    onClick={onButtonClicked}
                    buttonLabel='Disabled'
                /><br></br>
                <DtcButton
                    className='dtc-disabled-outline'
                    onClick={onButtonClicked}
                    buttonLabel='Disabled Outline'
                /><br></br>
            </div>
        </div>
    )
}
