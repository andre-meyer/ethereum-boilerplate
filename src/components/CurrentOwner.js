import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CurrentOwner = () => {
  const [owner, setOwner] = useState("?");

  return (
    <Container sx={{display: "flex", mt: 4, justifyContent: "center"}}>
      <Box sx={{ maxWidth: { md: 350 }, textAlign: "center"}}>
        <Typography variant="h5">Derzeitiger Besitzer: <code>{owner}</code></Typography>
      </Box>
    </Container>
  )
}

export default CurrentOwner;