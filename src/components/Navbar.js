import { Button, Container, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { Info, WaveSine } from 'phosphor-react'
import React, { useState } from 'react'

export default function Navbar({selectedFeature, setSelectedFeature}) {
 return (
    <Container sx={{
        backgroundColor: (theme) => theme.palette.success.light,
        marginTop: 5,
        height: 80,
        borderRadius: 5
    }}>
        <Stack flexDirection="row" justifyContent="space-between">
            <Stack alignItems="center">
                <WaveSine color="white" size="50px"/> 
                <Typography color="white">
                    Sinematic
                </Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center">
                <ToggleButtonGroup
                    sx={{border: "1px solid white"}}
                    value={selectedFeature}
                    exclusive
                    onChange={(e)=>{
                        setSelectedFeature(e.target.value)
                    }}
                    >
                    <ToggleButton sx={{color: "white !important"}} value="feature-a">Graphify</ToggleButton>
                    <ToggleButton sx={{color: "white !important"}} value="feature-b">ProbaVis</ToggleButton>
                </ToggleButtonGroup>
                {/* <Button variant="outlined" sx={{
                    color: "white",
                    border: "1px solid white",
                    height: 40,
                    marginLeft: 3
                }}>
                    <Info size="16px" color="white"/>
                    <spam style={{
                        marginLeft: "4px"
                    }}>
                        About
                    </spam>
                </Button> */}
            </Stack>
        </Stack>
    </Container>
  )
}
