import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@mui/material";
import { useState } from "react";

function RadioButtons() {
  const [value, setValue] = useState("");
  console.log({ value });

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience{" "}
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChangeRadio}
        //   row change orientation to horizontal
        >
          <FormControlLabel control={<Radio />} label="0-2" value={"0-2"}/>
          <FormControlLabel control={<Radio />} label="3-5" value={"3-5"}/>
          <FormControlLabel control={<Radio />} label="6-10" value={"6-10"}/>
        </RadioGroup>
        <FormHelperText>Please Select Valid Text</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default RadioButtons;
