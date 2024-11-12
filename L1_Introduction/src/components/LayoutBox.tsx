import { Box } from "@mui/material";
import React from "react";

function LayoutBox() {
  return (
    <>
      <Box
        component={"span"}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Mui Layout BOX
      </Box>
      <Box display={"flex"} height={"100px"} width={"100px"} bgcolor={"success.light"} p={"5px"} >Hello There</Box>
    </>
  );
}

export default LayoutBox;
