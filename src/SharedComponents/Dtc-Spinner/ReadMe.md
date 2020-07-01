<h1 align='center'>Spinner</h1>

## Library/PackageName
react-spinners

## Library/PackageVersion
"react-spinners": "^0.8.3"

## Library/PackageLicense

## Installation guidelines/steps

Copy the Dtc-spinner Folder.<br/>
Install the package react-spinners.

## How to use spinner component
<h2>Method1</h2>
import the react spinners package with necesary loader.<br/>
Eg:import CustomLoader from 'react-spinners/ScaleLoader.'<br/>
pass the loader to the component as children props.<br/>
<DtcSpinner customIcon={false} loading={loading}><br/>
	<CustomLoader size={50} color="#42d4f5" /><br/>
</DtcSpinner>
<h2>Method2</h2>
To pass custom icon to the component make customIcon prop as true.<br/>
place your icon in the assets folder and pass the name of the icon as props to the component.<br/>
<DtcSpinner customIcon={false} icon="./Assets/loader.svg" loading={loading}></DtcSpinner>

