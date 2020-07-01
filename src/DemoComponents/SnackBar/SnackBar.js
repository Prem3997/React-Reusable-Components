import React from "react";
import DtcSnackBarComponent from "../../SharedComponents/Dtc-SnackBar-Component/DtcSnackBarComponent";

const SnackBar = () => {
  return (
    <div>
      <DtcSnackBarComponent
        text="Hi I'm a SnackBar"
        actionLabel="Cancel"
        fadeDuration="9000"
      ></DtcSnackBarComponent>
    </div>
  );
};

export default SnackBar;
