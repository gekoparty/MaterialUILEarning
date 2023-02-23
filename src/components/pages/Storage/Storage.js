import React, { useState } from "react";
import GridWrapper from "../../commons/GridWrapper/GridWrapper";
import BasicSnackBar from "../../commons/BasicSnackBar/BasicSnackBar";
import UserTable from "../../commons/UserTable/UserTable";
import BasicCard from "../../BasicCard/BasicCard";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <GridWrapper>
      <BasicCard
        content={<UserTable onError={() => setOpen(true)} />}
      ></BasicCard>
      <BasicSnackBar
        severity={"error"}
        open={open}
        message={"Data could not be fetched"}
        onClose={handleClose}
      />
    </GridWrapper>
  );
};

export default Storage;
