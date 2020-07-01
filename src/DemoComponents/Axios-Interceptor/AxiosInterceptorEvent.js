import React from 'react';
import AxiosInterceptorService from './AxiosInterceptorService';
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton';

function AxiosInterceptorEvent(props) {
    const onClick404Error = () => {
        AxiosInterceptorService.get404()
    }
    const onClick500Error = () => {
        AxiosInterceptorService.get500()
    }
    const onClick400Error = () => {
        AxiosInterceptorService.get400()
    }

    
    return (
        <div>
            <DtcButton
                className='dtc-secondary-outline-whiteBg'
                onClick={onClick404Error}
                buttonLabel='Click for 404 Error'
            />
            <hr></hr>
            <DtcButton
                className='dtc-secondary-outline-whiteBg'
                onClick={onClick500Error}
                buttonLabel='Click for 500 Error'
            />
            <hr></hr>
            <DtcButton
                className='dtc-secondary-outline-whiteBg'
                onClick={onClick400Error}
                buttonLabel='Click for 400 Error'
            />
        </div>
    );
}

export default AxiosInterceptorEvent;