import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
export default function About() {
  return <>
  <Navbar/>
    <Container sx={{
        maxWidth: "100% !important",
        marginTop: 15,
        display: "flex",
        justifyContent: "center"
    }}>
        <Stack flexDirection={"row"} gap={15} alignItems={"center"}>
            <Stack gap={2}>
                <Typography fontSize={36} fontWeight={600} color="success.light">
                    Hey there! I'm Enoch!
                </Typography>
                <Typography maxWidth={400}>
                    Hello! I'm Enoch from Hong Kong! I created this website as a side project for those struggling to wrap their heads around maths concepts
                    such as graphs and probabilities! Feel free to mess around the website until you finally understand these abstract ideas :) Have fun!
                </Typography>
                <Stack direction="row" gap={2}>
                    <Box>
                        <Button href="https://github.com/eeknoc" target="_blank" startIcon={
                            <SvgIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <rect width="256" height="256" fill="none"/>
                                    <path d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                    <path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                    <path d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                                </svg>
                            </SvgIcon>
                        } variant="contained" sx={{
                            bgcolor: "black",
                            "&:hover": {bgcolor: "black"}
                        }}>
                            My GitHub
                        </Button>
                    </Box>
                    <Box>
                        <Button href="https://www.instagram.com/eedeotic/" target="_blank" startIcon={
                            <SvgIcon>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256">
                                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                                </svg>
                            </SvgIcon>
                        } variant="contained" sx={{
                            bgcolor: "purple",
                            "&:hover": {bgcolor: "purple"}
                        }}>
                            My Insta
                        </Button>
                    </Box>
                </Stack>
            </Stack>
            <Box width={400} height={700} sx={{
                backgroundImage: "url('aboutPhoto.png')",
                backgroundSize: "cover"
            }}/>
        </Stack>
    </Container>
  </>
}
