<h1 align='center'>Sticky Header</h1>


## Installation guidelines/steps

Copy the StickyHeader Folder<br/>


## Component Interface

<h3>Props</h3>
<h5>position:<h5/>
Sets the position of header.


## How to use the Component(brief)
1.import the Dtc-StickyHeader component.

2.To add more sections in header go to sectionRefs in StickyHeader.js file 
        a.section:Id of the Component to be added in div.
        b.ref:reference of the section.
        c.name:Any name of your choice.

const sectionRefs = [
    { section: "Menu1", ref: menu1Ref, name: "Menu 1" },
    { section: "Menu2", ref: menu2Ref, name: "Menu 2" },
    { section: "Menu3", ref: menu3Ref, name: "Menu 3" },
    { section: "Menu4", ref: menu4Ref, name: "Menu 4" },
    { section: "MultiSelect", ref: multiselectRef, name: "Multi Select" }
];


3.Import the component that is to be added and add.

<div className="section" id="Menu1" ref={menu1Ref} ><Menu1 /></div>
<div className="section" id="Menu2" ref={menu2Ref} ><Menu2 /></div>
<div className="section" id="Menu3" ref={menu3Ref} ><Menu3 /></div>
<div className="section" id="Menu4" ref={menu4Ref} ><Menu4 /></div>
<div id='MultiSelect' ref={multiselectRef}><MultiSelect/></div>
