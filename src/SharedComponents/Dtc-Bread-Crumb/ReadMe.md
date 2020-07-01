## Library/PackageName
@material-ui/core 

## Library/PackageVersion
@material-ui/core : ^4.9.11

## Library/PackageLicense
MIT

## Installation guidelines/steps

Copy the Dtc-Bread-Crumb Folder
Install @material-ui/core, react-router-dom

## How to use 
1.Copy the Dtc-Bread-Crumb folder.
2.Install  @material-ui/core, react-router-dom
3.Pass breadCrumbNameMap and breadCrumbNavData, breadCrumbSeperator(image or string),  breadCrumbMaxItemsToDisplay(number)  as props to DtcBreadCrumb.js file
    <DtcBreadCrumb 
        breadCrumbNavData={breadCrumbNavData} 
        breadCrumbNameMap={breadCrumbNameMap} 
        breadCrumbSeperator={breadCrumbSeperator} 
        breadCrumbMaxItemsToDisplay={breadCrumbMaxItemsToDisplay}
    ></DtcBreadCrumb>

## Sample Configuration  FILE

export const breadCrumbNameMap = {
    '/bread-crumb': 'BreadCrumb',
    '/bread-crumb/menu1': 'Menu 1',
    '/bread-crumb/menu1/subMenu1': 'Sub-Menu 1',
    '/bread-crumb/menu1/subMenu2': 'Sub-Menu 2',
    '/bread-crumb/menu2': 'Menu 2',
    '/bread-crumb/menu3': 'Menu 3',
};

export const  breadCrumbNavData = [
    {
        dropdownText: 'Menu 1',
        dropdownData: [
            {
                menuName: 'Sub-Menu 1',
                menuUrl: '/bread-crumb/menu1/subMenu1',
            },
            {
                menuName: 'Sub-Menu 2',
                menuUrl: '/bread-crumb/menu1/subMenu2',
            },
        ]
    },
    {
        menuName: 'Menu 2',
        menuUrl: '/bread-crumb/menu2',
    },       
]

export const breadCrumbSeperator = <img src={rightArrow} alt="seperator"></img>
export const breadCrumbMaxItemsToDisplay = 2

