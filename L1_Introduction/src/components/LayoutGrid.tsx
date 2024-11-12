import { Box, Grid, Grid2 } from "@mui/material";

function LayoutGrid() {
    //only xs distributed equal width to all boxes
    //there rowSpacing and column spacing on GRID
  return (
    <Grid container ml={4} spacing={2}>
      <Grid item xs sm={6}>
        <Box bgcolor={"primary.light"} p={4}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs sm={6}>
        <Box bgcolor={"primary.light"} p={4}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs sm={6}>
        <Box bgcolor={"primary.light"} p={4}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs sm={6}>
        <Box bgcolor={"primary.light"} p={4}>
          Item 4
        </Box>
      </Grid>
      {/* <Grid2></Grid2> */}
    </Grid>
  );
}

export default LayoutGrid;
