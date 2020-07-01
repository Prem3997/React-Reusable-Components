import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { SpeechToTextComp } from './SpeechToTextComp'

class DtcSpeechToText extends Component {
    render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening, listening } = this.props
        if (!browserSupportsSpeechRecognition) {
            return null
        }
        return (
            <div>
                <SpeechToTextComp
                    listening={listening}
                    transcript={transcript}
                    resetTranscript={resetTranscript}
                    startListening={startListening}
                    stopListening={stopListening}
                >
                </SpeechToTextComp>
            </div>
        )
    }
}
const options = {
    autoStart: false
}
export default SpeechRecognition(options)(DtcSpeechToText)