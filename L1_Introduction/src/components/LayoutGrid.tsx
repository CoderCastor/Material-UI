import { Box, Grid, Grid2 } from "@mui/material";

function LayoutGrid() {
  return (
    <Grid container ml={4}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={4}>Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={4}>Item 2</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={4}>Item 3</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={"primary.light"} p={4}>Item 4</Box>
      </Grid>
      {/* <Grid2></Grid2> */}
    </Grid>
  );
}

export default LayoutGrid;
