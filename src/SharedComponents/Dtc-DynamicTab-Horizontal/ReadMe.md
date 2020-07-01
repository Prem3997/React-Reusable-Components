## Library/PackageName
react-bootstrap

## Library/PackageVersion
react-bootstrap : ^1.0.1

## Library/PackageLicense

## Installation guidelines/steps

Copy the Dtc-DynamicTab-Horizontal Folder
Install react-bootstrap

## How to use 
1.Copy the Dtc-DynamicTab-Horizontal folder.
2.Install react-bootstrap
3.To dynamically add the tabs fill the following details in the form
 - menu Id :any number
 - menu Name: 'TAB 1'
 - menu Url  : 'tab1' (menu Url should match with the path in DynamicTabHorizontalRoute.js file) 
                ex: if path is '/dynamictab-horizontal/tab1' fill the form in  menu Url field as 'tab1'
4.To add new tabs by passing the details from json pass the navLinkData (which contains menuId, menuName, menuUrl properties ) as props to DtcDynamicTabHorizontal.js file to display the existing horizontal tabs
    <DtcDynamicTabHorizontal 
        navLinkData={navLinkData}>
    </DtcDynamicTabHorizontal>

## Sample Configuration  FILE

    export const navLinkData = [
    {
        menuName: 'TAB 1',
        menuUrl: 'tab1'
    },
    {
        menuName: 'TAB 2',
        menuUrl: 'tab2'
    }
]
