import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

export default function FeatureHero({feature}) {
  return (
    <Container sx={{
        margin: 0,
        marginTop: 7,
        backgroundImage: "url('heroBgEdit.png')",
        filter: 'brightness("40%")',
        maxWidth: "100% !important",
        height: 170
    }}>
        <Stack alignItems="center" justifyContent="center" sx={{
            height: "100%"
        }}>
            <Typography color="white" fontSize="40px" fontWeight="bold" textTransform="uppercase">
                {feature === "graphify" ? "Graphify" : "ProbaVis"}
            </Typography>
            <Typography color="white" fontSize="20px">
                {feature === "graphify" ? "Downloadable graphing calculator" : "Visual illustration of Probabilities"}
            </Typography>
        </Stack>
    </Container>
  )
}
