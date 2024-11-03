import { Box, TextField, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

function SelectDropDown() {
  const [country, setCountry] = useState("");
  const [countryMultiple, setCountryMultiple] = useState<String[]>([]);
//   console.log(country);

  const handleSelectCountryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCountry(event.target.value);
  };

  console.log({countryMultiple});
  
  const handleSelectCountryChangeMultiple = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCountryMultiple(typeof value === 'string' ? value.split(",") : value);
  };

  return (
    <Stack direction={"row"} spacing={3}>
      <Box width={"250px"}>
        <TextField
          label="Select your country"
          select
          fullWidth
          value={country}
          onChange={handleSelectCountryChange}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="RS">Russia</MenuItem>
          <MenuItem value="US">United States</MenuItem>
          <MenuItem value="JP">JAPAN</MenuItem>
        </TextField>
      </Box>

      <Box width={"250px"}>
        <TextField
          label="Select Countries"
          select
          fullWidth
          value={countryMultiple}
          onChange={handleSelectCountryChangeMultiple}
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          error
          helperText="Please select multiple Countries"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="RS">Russia</MenuItem>
          <MenuItem value="US">United States</MenuItem>
          <MenuItem value="JP">JAPAN</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}

export default SelectDropDown;
