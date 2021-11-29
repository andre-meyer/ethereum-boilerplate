import React, { useState } from "react";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from '@mui/lab/LoadingButton';
import sleep from "../utils/sleep";
import {incrementNumber} from "../api";

const IncrementNumber = () => {
  const [buttonState, setButtonState] = useState("READY")
  const [errorState, setErrorState] = useState('');

  const handleClick = async () => {
    try {
      setButtonState("LOADING")
      setErrorState('');
      await incrementNumber()
    } catch (err) {
      setErrorState(err.message);
    } finally {
      setButtonState("READY");
    }
  }

  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
      <Box sx={{ maxWidth: { md: 350 }, textAlign: "center"}}>
        <Box>
          {errorState && (<Typography variant="p"><code>Error occurred:<br />{errorState}</code></Typography>)}
        </Box>
        <LoadingButton variant="contained" onClick={handleClick} loading={buttonState === "LOADING"}>
            Increase Number
        </LoadingButton>
      </Box>
    </Container>
  )
}

export default IncrementNumber;