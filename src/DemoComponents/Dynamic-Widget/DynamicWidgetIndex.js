import React, { useState } from 'react';
import DtcDynamicWidget from '../../SharedComponents/Dtc-Dynamic-Widget/DtcDynamicWidget';
import MultiSelect from '../Multi-Select/MultiSelect';
import PickTableIndex from '../Pick-Table/PickTableIndex';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import DtcNumberFormatLang from './Components/DtcNumberFormatLang';
import './DynamicWidget.scss'
function DynamicWidgetIndex(props) {

  const langProps = {
    title: 'Currency Number Format',
    language: "ja-JP", //ja-JP //fr //kn
    data: 123456.789,
    style: 'currency',
    currency: 'JPY', //JPY //EUR //INR
    currencyDisplay: 'symbol' //symbol:default //code //name
  }
  const tabValue = [
    {
      name: 'Tab 1',
      content: {
        body: [
          {
            _uid: "1",
            component: "component1",
            headline: "Data 1 headline"
          },
          {
            _uid: "2",
            component: "component2",
            content: " Data 2  content"
          },

        ]
      }
    },
    {
      name: 'Tab 2',
      content: {
        body: [
          {
            _uid: "3",
            component: "multiSelect",

          },
        ]
      }
    },
    {
      name: 'Tab 3',
      content: {
        body: [
          {
            _uid: "4",
            component: "pickTable",

          },
        ]
      }
    },
    {
      name: 'Tab 4',
      content: {
        body: [
          {
            _uid: "5",
            component: "numberFormat",
            langProps: langProps
          },
        ]
      }
    },

  ];
  const DynamicWidgetComponents = {
    component1: Component1,
    component2: Component2,
    multiSelect: MultiSelect,
    pickTable: PickTableIndex,
    numberFormat: DtcNumberFormatLang
  };
  const [selectedComponent, setSelectedComponent] = useState([])
  const [className,setClassName] = useState('widgetButton')

  const loadTab = (data) => {
    setSelectedComponent(data.content.body)
    setClassName(data.name)
  }
  
  return (
    <div>
       
      {tabValue.map((data,i) => (
        <span id={i} key={i}>
        <button key={i}  className={className===data.name?'activeWidget':"widgetButton"} onClick={() => loadTab(data)}>{data.name}</button>
        </span>
      ))}
      
      <DtcDynamicWidget selectedComponent={selectedComponent} DynamicWidgetComponents={DynamicWidgetComponents}></DtcDynamicWidget>
    </div>
  );
}

export default DynamicWidgetIndex;