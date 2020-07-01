import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ data, classValue ,img}, ref) => {
  return (
    <div className={`item ${classValue}`} ref={ref}>
      
      {img ? <img className="drag-img" src={require(`../../Assets/${data.text}`)} alt="Loading..."></img>:<span>{data.text}</span>}
    </div>
  );
});
