import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function TextFieldsForms() {
  const [value, setValue] = useState("");
  const [visibile, setVisible] = useState(false);

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
          required
        />
        <TextField
          label="Password"
          color="success"
          type="password"
          helperText="Do not share your password with anyone"
        />
        {/*Disabled use to Disabled files from any editing */}
        <TextField
          disabled
          label="Password"
          color="success"
          type="password"
          helperText="Do not share your password with anyone"
        />
        {/* Same as read only, can't change field value */}
        <TextField
          label="readOnly"
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Password"
          type={!visibile ? "password" : "text"}
          color="success"
          InputProps={{
            endAdornment: !visibile ? (
              <InputAdornment position="end" className="cursor-pointer">
                <VisibilityIcon
                  onClick={() => setVisible(true)}
                  fontSize="small"
                />
              </InputAdornment>
            ) : (
              <InputAdornment position="end">
                <VisibilityOffIcon
                  className="cursor-pointer"
                  onClick={() => setVisible(false)}
                  fontSize="small"
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}

export default TextFieldsForms;
