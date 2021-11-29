import React, { useState } from "react";
import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoadingButton from '@mui/lab/LoadingButton';
import sleep from "../utils/sleep";
import {resetNumber} from "../api";

const ResetNumber = () => {
  const [buttonState, setButtonState] = useState("READY")
  const [errorState, setErrorState] = useState('');

  const handleClick = async () => {
    try {
      setErrorState('');
      setButtonState("LOADING")
      const shouldContinue = confirm("Are you sure? This is cannot be undone.");
      if (shouldContinue) await resetNumber();
    } catch (err) {
      setErrorState(err.message);
    } finally {
      setButtonState("READY");
    }
  }

  return (
    <Container sx={{display: "flex", mt: 2, justifyContent: "center"}}>
      <Box sx={{ maxWidth: { md: 350 }, textAlign: "center"}}>
        <Box>
          {errorState && (<Typography variant="p"><code>Error occurred:<br />{errorState}</code></Typography>)}
        </Box>
        <LoadingButton variant="contained" onClick={handleClick} loading={buttonState === "LOADING"}>
            Reset Number
        </LoadingButton>
      </Box>
    </Container>
  )
}

export default ResetNumber;