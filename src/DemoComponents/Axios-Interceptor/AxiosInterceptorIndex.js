import React from 'react';
import AxiosInterceptorEvent from './AxiosInterceptorEvent';
import DtcAxiosInterceptor from '../../SharedComponents/Dtc-Axios-Interceptor/DtcAxiosInterceptor';
import './axiosInterceptor.scss'
 
const AxiosInterceptorIndex = (props) => {
    const handleError = (error) =>{
        switch (error.status.toString()) {
            case '404':
                alert('Wrong API Address')
                break;
            case '500':
                alert('Internal Server Error')
                break;
            case '400':
                alert('Bad Request')
                break;
            default:
                break;
        }
    }

    return (
        <div className="axiosInterceptor-main">
            <DtcAxiosInterceptor handleError={handleError}></DtcAxiosInterceptor>
            <AxiosInterceptorEvent ></AxiosInterceptorEvent>            
        </div>
    );
}

export default AxiosInterceptorIndex;