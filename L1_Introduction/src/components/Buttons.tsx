import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function Buttons() {
  return (
    <Stack direction={"column"} spacing={5}>
      <Stack spacing={3} direction={"row"}>
        <Button variant="outlined" href="https://www.google.com">
          Google
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="contained" color="secondary">
          Secondary color
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={1} direction={"row"}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack display={"block"} direction={"row"} spacing={2}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        {/* Material icons in buttons use of startIcon endIcon */}
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableElevation
          disableRipple
        >
          Send
        </Button>
        {/* disableElevation removes shadow from buttons and disableElevation removes ripples from the buttons*/}
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>

        {/* We can directly use iconButton  */}
        <IconButton aria-label="send" color="success">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <ButtonGroup variant="contained">
          <Button>medium</Button>
          <Button>medium</Button>
          <Button>medium</Button>
        </ButtonGroup>

        <ButtonGroup variant="outlined">
          <Button>medium</Button>
          <Button>medium</Button>
          <Button>medium</Button>
        </ButtonGroup>

        <ButtonGroup variant="text">
          <Button>medium</Button>
          <Button>medium</Button>
          <Button>medium</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        {/* for vertically user orientation  */}
        <ButtonGroup variant="text" orientation="vertical" className="">
          <Button>medium</Button>
          <Button>medium</Button>
          <Button>medium</Button>
        </ButtonGroup>

        <ButtonGroup
          variant="contained"
          color="secondary"
          orientation="vertical"
        //   size="small"
        >
          <Button>medium</Button>
          <Button>medium</Button>
          <Button>medium</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default Buttons;
