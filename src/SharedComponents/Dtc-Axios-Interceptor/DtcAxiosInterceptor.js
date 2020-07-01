import React from 'react';
import Axios from 'axios';

const DtcAxiosInterceptor = ({handleError}) => {
    Axios.interceptors.response.use(
        response => {
            //handle response here
            return response
        },
        error => {
            handleError(error.response)
            return Promise.reject(error);

        }
    )
    return (
        <div>
            
        </div>
    );
}

export default DtcAxiosInterceptor;