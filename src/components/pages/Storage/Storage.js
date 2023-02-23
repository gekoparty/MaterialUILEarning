import React from "react";
import GridWrapper from "../../commons/GridWrapper/GridWrapper";
import BasicSnackBar from "../../commons/BasicSnackBar/BasicSnackBar";
import CommonButton from "../../commons/CommonButton";

const Storage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <GridWrapper>
      Test
      <CommonButton variant="contained" onClick={handleClick}>
        Open success snackbar
      </CommonButton>
      <BasicSnackBar open={open} onClose={handleClose} severity="error" message={"Success"} />
    </GridWrapper>
  );
};

export default Storage;
