import React, { useState } from 'react'
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import ClearIcon from '@material-ui/icons/Clear';
import './SpeechToTextStyles.css'
export const SpeechToTextComp = (props) => {
    const searchKeyWord='What are you looking For'
    const speechKeyWord='Listening...'
    var initalScriptState=searchKeyWord
    const [scriptState, setScriptState] = useState(initalScriptState)
    const [finalTranscript, setFinalTranscript] = useState('')
    const micOnClicked = () => {
        props.stopListening()
        setScriptState(searchKeyWord        )
        setFinalTranscript(props.transcript)
    }
    const micOffClicked = () => {
        props.startListening()
        setScriptState(speechKeyWord)
    }
    const resetButtonClicked = () => {
        props.resetTranscript()
        setFinalTranscript('')
        setScriptState(initalScriptState)
    }
    const handleFocusSearchBox=(e)=>{
        setScriptState('')
    }
    const handleChangeSearchBox=(e)=>{
        setScriptState(e.target.value)
        props.resetTranscript()
        setFinalTranscript(e.target.value)
    }
    return (
        <div className="speech-text-styles">
            <input
                className='search-box'
                type="text"
                value={scriptState}
                onChange={handleChangeSearchBox}
                onFocus={handleFocusSearchBox}
            />
            {props.listening === true &&
                <MicIcon
                    className='mic-icon'
                    style={{ fontSize: 50 }}
                    onClick={micOnClicked}
                />}
            {props.listening === false &&
                <MicOffIcon
                    className='mic-off-icon'
                    style={{ fontSize: 50 }}
                    onClick={micOffClicked}
                />}
            <ClearIcon
                className='del-icon'
                style={{ fontSize: 50 }}
                onClick={resetButtonClicked}
            />
            {props.transcript &&
                <div className='speech-textbox'>
                    <b>Speech Text:</b>
                    {props.transcript}
                </div>
            }
            {finalTranscript &&
                <div className='speech-textbox'>
                    <b>Final Text:</b>
                    {finalTranscript}
                </div>
            }
        </div>
    )
}
