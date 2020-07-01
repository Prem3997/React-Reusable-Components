import React from 'react';
import rightArrow from './Assets/rightArrow.png'
export const breadCrumbNameMap = {
    '/bread-crumb': 'BreadCrumb',
    '/bread-crumb/menu1': 'Menu 1',
    '/bread-crumb/menu1/subMenu1': 'Sub-Menu 1',
    '/bread-crumb/menu1/subMenu2': 'Sub-Menu 2',
    '/bread-crumb/menu2': 'Menu 2',
    '/bread-crumb/menu3': 'Menu 3',
};

export const  breadCrumbNavData = [
    {
        dropdownText: 'Menu 1',
        dropdownData: [
            {
                menuName: 'Sub-Menu 1',
                menuUrl: '/bread-crumb/menu1/subMenu1',
            },
            {
                menuName: 'Sub-Menu 2',
                menuUrl: '/bread-crumb/menu1/subMenu2',
            },
        ]
    },
    {
        menuName: 'Menu 2',
        menuUrl: '/bread-crumb/menu2',
    },
    {
        menuName: 'Menu 3',
        menuUrl: '/bread-crumb/menu3',
    },    
]

export const breadCrumbSeperator = <img src={rightArrow} alt="seperator" style={{width:'12px',height:'12px'}}></img>
export const breadCrumbMaxItemsToDisplay = 2