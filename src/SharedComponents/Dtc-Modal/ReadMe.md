## Library/PackageName
Material UI

## Library/PackageVersion
"material-table": "^1.57.2",

## Installation guidelines/steps

Copy the Dtc-Modal Component Folder. Pass the props such as title , show property, element and footer.<br />
The elements props contains the desired element to be rendered.<br />
The footer props containts the footer elements for the individual modal.<br />

## Sample Configuration JSON FILE

const elementSnackBar = < SnackBar /><br />
const footerSnackBar = < DtcButton
        className='dtc-secondary-whiteBg'
        onClick={handleCloseSnackbar}
        buttonLabel='Close'
    />

## How to use Material-Table
import the DtcModal Component <br />
import SnackBar from '../SnackBar/SnackBar'<br />
< DtcModal
                title='SnackBar-Example'
                show={showSnackbar}
                element={elementSnackBar}
                footer={footerSnackBar}
            />
            
