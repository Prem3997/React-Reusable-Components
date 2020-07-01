## Library/PackageName
NA

## Library/PackageVersion
NA

## Library/PackageLicense
NA

## Installation guidelines/steps

Copy the Dtc-Axios-Interceptor Folder

## How to use 
1.Copy the Dtc-Axios-Interceptor folder (https://github.dxc.com/ay7/dtc-react-reusable-component/tree/dev/src/SharedComponents/Dtc-Axios-Interceptor)
2.Create  API calls 
  for example:
    const onClick404Error = () => {
        Axios.get(`http://httpstat.us/404`)
    }
    <DtcButton
                className='dtc-secondary-outline-whiteBg'
                onClick={onClick404Error}
                buttonLabel='Click for 404 Error'
    />
3.Customize the handleError function to handle the error from the response and send as props to DtcAxiosInterceptor.js file
4.User can modify the error message and the switch case accordingly as below:

const handleError = (error) =>{
        switch (error.status.toString()) {
            case '404':
                alert('Wrong API Address')
                break;
            case '500':
                alert('Internal Server Error')
                break;
            case '400':
                alert('Bad Request')
                break;
            default:
                break;
        }
    }

<DtcAxiosInterceptor 
    handleError={handleError}>
</DtcAxiosInterceptor>

(For creating API calls and customizing handleError function refer Axios-Interceptor folder – src/DemoComponents/Axios-Interceptor)

