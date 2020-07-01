import React, { useState, useRef } from "react";
import "../../styles.css";
import useDrag from "../../hooks/useDrag";
import View from "./view";

export default ({ dragEffect, data, key, id,img }) => {
  const dragRef = useRef();
  const [classValue, setClassValue] = useState("grab");
  const { dragState } = useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => setClassValue("grabbing"),
    onDragEnd: () => {
      setClassValue("grab");
    }
  });
  return <View ref={dragRef} dragState={dragState} data={data} classValue={classValue} img={img} />;
};
