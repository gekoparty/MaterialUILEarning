import React, { useState } from "react";

import BasicCard from "../BasicCard/BasicCard";
import SearchBar from "../SearchBar/SearchBar";
import CommonButton from "../commons/CommonButton";
import { IconButton, Box, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import GridWrapper from "../commons/GridWrapper/GridWrapper";
import BasicModal from "../commons/BasicModal/BasicModal";
import { cardHeaderStyles } from "./styles";

const Authentication = () => {
  const [open, setOpen] = useState(false);

  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone numer or even user ID"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => {
    return (
      <Typography
        align="center"
        sx={{
          margin: "40px 16px",
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.3rem",
        }}
      >
        No users for this project yet
      </Typography>
    );
  };

  return (
    <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />
            <BasicModal open={open} onClose={() => setOpen(false)}/>
        </GridWrapper>
  );
};

export default Authentication;
