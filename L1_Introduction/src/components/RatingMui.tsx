import { Box, Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoritedIcon from "@mui/icons-material/Favorite";
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'
function RatingMui() {
  const [value, setValue] = useState<number | null>(null);

  console.log(value);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
        <Rating
        size="large"
        value={value}
        onChange={handleChange}
        // precision={0.5}
      />
      <Rating
        size="large"
        value={value}
        onChange={handleChange}
        precision={0.5}
        icon={<FavoritedIcon fontSize='large' color="error" />}
        emptyIcon={<FavouriteBorderIcon fontSize="large" />}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
}

export default RatingMui;
