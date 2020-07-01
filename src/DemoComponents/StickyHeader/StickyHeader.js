import React, { useState, useRef } from 'react';
import Menu1 from './Components/Menu1';
import Menu2 from './Components/Menu2'
import Menu3 from './Components/Menu3'
import Menu4 from './Components/Menu4'
import './StickyComponent.css'
import DtcStickyHeader from '../../SharedComponents/Dtc-StickyHeader/DtcStickyHeader';
import MultiSelect from '../Multi-Select/MultiSelect';
const StickyHeader = (props) => {
  const [selected, setSelected] = useState('top')
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  const menu1Ref = useRef(null);
  const menu2Ref = useRef(null);
  const menu3Ref = useRef(null);
  const menu4Ref = useRef(null);
  const multiselectRef = useRef(null)

  const sectionRefs = [
    { section: "Menu1", ref: menu1Ref, name: "Menu 1" },
    { section: "Menu2", ref: menu2Ref, name: "Menu 2" },
    { section: "Menu3", ref: menu3Ref, name: "Menu 3" },
    { section: "Menu4", ref: menu4Ref, name: "Menu 4" },
    { section: "MultiSelect", ref: multiselectRef, name: "Multi Select" }
  ];
  return (
    <div>
    <div className="sticky">
      <div className="select" onChange={handleChange}>
        <span className="navbar-info">Select Header Position:</span>
        <input type="radio" value="top" id="position1" checked={selected === "top"} />
        <label className="label1" htmlFor="position1"><b>Top</b></label>
        <input type="radio" value="bottom" id="position2" checked={selected === "bottom"} />
        <label className="label1" htmlFor="position2"><b>Bottom</b></label>
        <input type="radio" value="left" id="position3" checked={selected === "left"} />
        <label className="label1" htmlFor="position3"><b>Left</b></label>
        <input type="radio" value="right" id="positio4" checked={selected === "right"} />
        <label className="label1" htmlFor="position4"><b>Right</b></label>
      </div>

      <div>
        <DtcStickyHeader sectionRefs={sectionRefs} position={selected}></DtcStickyHeader>
      </div>
      </div>
      <div className="section" id="Menu1" ref={menu1Ref} ><Menu1 /></div>
      <div className="section" id="Menu2" ref={menu2Ref} ><Menu2 /></div>
      <div className="section" id="Menu3" ref={menu3Ref} ><Menu3 /></div>
      <div className="section" id="Menu4" ref={menu4Ref} ><Menu4 /></div>
      <div
        id='MultiSelect'
        ref={multiselectRef}>
        <MultiSelect
        />
      </div>
      <div className="bottom-spacer"></div>

    </div>
  );
}

export default StickyHeader;