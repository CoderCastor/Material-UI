import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
// import React from 'react'

function AutocompleteMui() {
  const [value, setValue] = useState<String | null>(null);

  const skills = ["HTML", "JavaScript", "CSS", "NodeJS", "Express"];

  type Skill = {
    id: number;
    label: String;
  };

  const [skill, setSkill] = useState<Skill | null>(null);
  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  // console.log(value)
  console.log(skill);

  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        value={value}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event: any, newValue: String | null) => setValue(newValue)}
      />

      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: String | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
}

export default AutocompleteMui;
