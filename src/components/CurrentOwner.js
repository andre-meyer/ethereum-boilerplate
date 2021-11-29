import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getOwner } from "../api";

const CurrentOwner = () => {
  const [owner, setOwner] = useState("?");

  useEffect(() => {
    (async () => {
      const instanceOwner = await getOwner()

      setOwner(instanceOwner);
    })();
  })

  return (
    <Container sx={{display: "flex", mt: 4, justifyContent: "center"}}>
      <Box sx={{ maxWidth: { md: 600 }, textAlign: "center"}}>
        <Typography variant="h5">Derzeitiger Besitzer: <code>{owner}</code></Typography>
      </Box>
    </Container>
  )
}

export default CurrentOwner;