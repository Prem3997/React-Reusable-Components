import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ children, heading }, ref) => {
  return (
    <div className="drop-container" ref={ref}>
      <h3 className="drop-header">{heading}</h3>
      <div className="body">{children}</div>
    </div>
  );
});
