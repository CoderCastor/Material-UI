import { Box, FormControlLabel, Stack,Checkbox, FormLabel, FormControl, FormGroup, FormHelperText } from '@mui/material'
import BookMarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookMarkIcon from "@mui/icons-material/Bookmark"
import {useState} from 'react'

function CheckBoxes() {
    const [acceptTnC,setAcceptTnC] = useState(false)
    const [skills,setSkills] = useState<String[]>([])
    console.log({skills})
    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills,event.target.value])
        }else{
            setSkills(skills.filter(skill => skill !== event.target.value ))
        }
    } 

  return (
    <Stack spacing={3}>
        <Box>
            <Box>
                <FormControlLabel label="I accept the terms and conditions." control={<Checkbox checked={acceptTnC} onChange={handleCheckBoxChange} />} />
            </Box>

            <Box>
                <FormLabel id='bookmark-label' >Bookmark</FormLabel>
                <Checkbox aria-labelledby='bookmark-label' icon={<BookMarkBorderIcon/>} checkedIcon={<BookMarkIcon/>} checked={acceptTnC} onChange={handleCheckBoxChange} />
            </Box>
        </Box>

        <Box>

            <FormControl error>
                <FormLabel color='secondary' >Skills</FormLabel>
                <FormGroup>
                <FormControlLabel label="HTML" control={<Checkbox value={"html"} checked={skills.includes('html')} onChange={handleSkillsChange} />} />
                <FormControlLabel label="CSS" control={<Checkbox value={"css"} checked={skills.includes('css')} onChange={handleSkillsChange} />} />
                <FormControlLabel label="JavaScript" control={<Checkbox value={"javascript"} checked={skills.includes('javascript')} onChange={handleSkillsChange} />} />
                </FormGroup>
                <FormHelperText>Invalid Input</FormHelperText>
            </FormControl>
        </Box>
    </Stack>
  )
}

export default CheckBoxes