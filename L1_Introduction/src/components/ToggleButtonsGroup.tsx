import { ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
function ToggleButtonsGroup() {
  const [formats, setFormats] = useState<String[]>([]);
  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: String[]
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <>
      <Stack direction={"column"} spacing={2}>
        <Stack direction={"row"} spacing={2}>
          <ToggleButtonGroup
            aria-label="text formatting"
            value={formats}
            onChange={handleFormatChange}
            size="large"
            color="secondary"
            // orientation="vertical"
            // exclusive 
            //exclusive can be use when the only one toggle need to select
          >
            <ToggleButton value={"bold"} aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value={"italic"} aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value={"underlined"} aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
}

export default ToggleButtonsGroup;
