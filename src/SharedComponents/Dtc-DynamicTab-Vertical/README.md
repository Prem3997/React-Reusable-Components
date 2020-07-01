# Dynamic Tab Vertical:

## Library/PackageName
react-bootstrap
react-router-dom

## Library/PackageVersion
react-bootstrap : ^1.0.1
react-router-dom : ^5.1.2

## Library/PackageLicense

## Installation guidelines/steps

Copy the DynamicTab-Vertical Folder

## Sample Configuration  FILE
### in NavigationBarProps.js file(initial tabs can be added here)
    export const navLinkData = [
    {
        menuName: 'TAB 1',
        menuUrl: '/tab1'
    },
    {
        menuName: 'TAB 2',
        menuUrl: '/tab2'
    }
]

## How to use 
    1.add the path in DynamicTabVerticalRoute.js file
    
            <Route exact path='/dynamictab-vertical/tab1' render={() => <Tab1></Tab1>}></Route>
            <Route exact path='/dynamictab-vertical/tab2' render={() => <Tab2></Tab2>}></Route>

    2. to add the tabs dynamically fill the form as below:

            a.menu Id: any number
            b.menu Name: 'TAB 1'
            c.menu Url: 'tab1' (menu Url should match with the path in DynamicTabVerticalRoute.js file) 
                ex: if path is '/dynamictab-vertical/tab1'
                     fill the form in  menu Url field as 'tab1'

