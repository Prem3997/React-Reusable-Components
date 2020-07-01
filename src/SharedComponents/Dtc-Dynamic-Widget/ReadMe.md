## Library/PackageName
NA

## Library/PackageVersion
NA

## Library/PackageLicense
NA

## Installation guidelines/steps

Copy the Dtc-Dynamic-Widget Folder

## How to use 
1.Copy the Dtc-Dynamic-Widget folder.
2.To dynamically generate the components ,its details has to be given in tabValue object (example is shown below in sample configuration file section)
3.tabValue contains an array called body which consists of multiple objects with different fields and one attribute called components which allows us to determine what component we should use to render its actual content.
4.On Click of each tab, selectedComponent object (which contains selected component details like uid, component, component props) is passed as props to DtcDynamicWidget.js file
5.DynamicWidgetComponents is also passed as props to DtcDynamicWidget.js file 
6.DynamicWidgetComponents object maps the React components to the name we have given in the component attribute in tabValue object
7.To allow the component itself to access the selected instance properties we’re using the ‘data’ object and pass it down to the React component we will create. 
    For example Component1 is created and data object is obtained as props which has uid,component,headline attributes. 
      
<DtcDynamicWidget 
    selectedComponent={selectedComponent} 
    DynamicWidgetComponents={DynamicWidgetComponents}>
</DtcDynamicWidget>

*for more details on how pass the props refer DynamicWidgetIndex.js file (in src/DemoComponents/Dynamic-Widget)*


## Sample Configuration  FILE
1.tabValue:
    const tabValue = [
        {
          name: 'Tab 1',
          content: {
            body: [
              {
                _uid: "1",
                component: "component1",
                headline: "Data 1 headline"
              },
              {
                _uid: "2",
                component: "component2",
                content: " Data 2  content"
              },]
          }
        },
    ];

2.SelectedComponent which is passed as props can be obtained in the following way:
    const [selectedComponent, setSelectedComponent] = useState([])

    const loadTab = (data) => {
        setSelectedComponent(data.content.body)
    }

    {tabValue.map((data,i) => (
        <span key={i}>
        <button key={i} onClick={() => loadTab(data)}>{data.name}</button>
        </span>
    ))}

2.const DynamicWidgetComponents 
    const DynamicWidgetComponents = {
        component1: Component1,
        component2: Component2,
        multiSelect: MultiSelect,
        pickTable: PickTableIndex,
        numberFormat: DtcNumberFormatLang
      };

3.Component1 is created as shown below:

    import React from 'react';

    const Component1 = ({ data }) => {
      return (
        <div>
          Data 1
          <h2>{data.headline}</h2>
        </div>
      );
    }export default Component1;

