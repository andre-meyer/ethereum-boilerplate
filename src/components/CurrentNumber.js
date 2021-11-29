import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CurrentNumber = () => {
  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
      <Box sx={{ maxWidth: { md: 350 }, textAlign: "center"}}>
        <Typography variant="h5">Die derzeitige Zahl ist...</Typography>
        <Typography variant="h1">?</Typography>
      </Box>
    </Container>
  )
}

export default CurrentNumber;