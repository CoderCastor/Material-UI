import { Box, Divider, Stack } from "@mui/material";

function LayoutStack() {
  return (
    <Stack
    //   direction={"row-reverse"}
    direction={"row"}
      spacing={2}
      divider={<Divider orientation="vertical" />}
    //   multiple of 8px in spacing
      sx={{
        border: "1px solid red",
        padding: "6px",
      }}
    >
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
      <Box
        display={"flex"}
        height={"100px"}
        width={"100px"}
        bgcolor={"success.light"}
        p={"5px"}
      >
        Hello There
      </Box>
    </Stack>
  );
}

export default LayoutStack;
