import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

function SwitchesMui() {
  const [checked, setChecked] = useState(false);
  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={`${checked ? "bg-zinc-900" : "bg-white"} h-[100vh] w-[100vw] flex justify-center items-center`} >
      <Box>
        <FormControlLabel
            className={`${checked && "text-white"}`}
          label="Dark Mode"
          control={
            <Switch
              checked={checked}
              size="medium"
            //   color="success"
              onChange={handleChange}
            />
          }
        />
      </Box>
    </div>
  );
}

export default SwitchesMui;
