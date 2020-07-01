# Number Format based on browser locale:

## Library/PackageName
react-bootstrap

## Library/PackageVersion
react-bootstrap : ^1.0.1

## Library/PackageLicense

## Installation guidelines/steps

Copy the DynamicMenu-Horizontal Folder
Install react-bootstrap 

## How to use

1.Copy the Dtc-DynamicMenu-Horizontal folder.
2.Install react-bootstrap
3.To dynamically add the menu fill the following details in the form 
 - menu Id: any number
 - menu Name: 'TAB 1'
 - menu Url: 'tab1' (menu Url should match with the path in DynamicMenuHorizontalRoute.js file) 
              ex: if path is '/dynamictab-horizontal/menu1' fill the form in  menu Url field as 'menu1'
 - menu icon: 'glyphicon glyphicon-home'
4.To add new tabs by passing the details from json, pass the navLinkData (which contains menuName, menuUrl, icon properties ) as props to DtcDynamiMenuHorizontal.js file to display the existing horizontal menu 
5.To add a dropdown menu, user have to pass dropdownText,dropdownData from json 

## Sample Configuration  FILE
    export const navLinkData = [
    {
        menuName: 'Menu 1',
        menuUrl: 'menu1',
        icon:"glyphicon glyphicon-cog"
        
    },
    {
        menuName: 'Menu 2',
        menuUrl: 'menu2',
        icon:'glyphicon glyphicon-home'
    },
    {
        
        dropdownText:'Dropdown',
        dropdownData:[
            {
                menuName: 'Menu3',
                menuUrl: 'menu3',
                icon:"glyphicon glyphicon-briefcase"
                
            },
            {
                menuName: 'Menu4',
                menuUrl: 'menu4',
                icon:'glyphicon glyphicon-home'
                
            },
        ]
    },    
]
