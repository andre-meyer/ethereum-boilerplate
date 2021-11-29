import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {changeOwner} from "../api";
import { LoadingButton } from "@mui/lab";

const ChangeOwner = () => {
  const [buttonState, setButtonState] = useState("READY")
  const [newOwnerField, setNewOwnerField] = useState('');
  const [errorState, setErrorState] = useState("");

  const changeField = (e) => {
    setNewOwnerField(e.target.value);
  }

  const handleClick = async () => {
    try {
      setButtonState("LOADING")
      setErrorState('');
      await changeOwner(newOwnerField)
    } catch (err) {
      setErrorState(err.message);
    } finally {
      setButtonState("READY");
    }
  }

  return (
    <Container sx={{display: "flex", mt: 4, justifyContent: "center"}}>
      <Box sx={{ maxWidth: { md: 350 }, display: "flex", textAlign: "center", flexDirection: "column"}}>
        <TextField label="New Owner" onChange={changeField} value={newOwnerField} />

        <Box>
          {errorState && (<Typography variant="p"><code>Error occurred:<br />{errorState}</code></Typography>)}
        </Box>
        <LoadingButton disabled={!newOwnerField} loading={buttonState === "LOADING"} onClick={handleClick} sx={{ mt: 2}} variant="contained">Change Owner</LoadingButton>
      </Box>
    </Container>
  )
}

export default ChangeOwner;