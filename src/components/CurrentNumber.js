import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getNumber } from "../api"

import MyContract from "../ethereum/contract/MyContract";

const CurrentNumber = () => {
  const [currentNumber, setCurrentNumber] = useState('?');

  useEffect(() => {
    (async () => {
      const num = await getNumber();
      setCurrentNumber(num);
    })();
  }, [])


  return (
    <Container sx={{display: "flex", justifyContent: "center"}}>
      <Box sx={{ maxWidth: { md: 350 }, textAlign: "center"}}>
        <Typography variant="h5">Die derzeitige Zahl ist...</Typography>
        <Typography variant="h1">{currentNumber}</Typography>
      </Box>
    </Container>
  )
}

export default CurrentNumber;