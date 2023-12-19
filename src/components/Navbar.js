import { Button, Container, Stack, Typography } from '@mui/material'
import { ChartLine, DiceSix, Info, WaveSine } from 'phosphor-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const {pathname} = useLocation()

    return (
    <Container sx={{
        // position: "fixed",
        // top: 5,
        // left: "50%",
        // transform: "translate(-50%)",
        backgroundColor: (theme) => theme.palette.success.light,
        marginTop: 5,
        height: 80,
        border: "3px solid white",
        borderRadius: 5,
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        zIndex: 10,
    }}>
        <Stack flexDirection="row" justifyContent="space-between">
            <Link to="/" style={{textDecoration: "none"}}>
                <Stack alignItems="center">
                    <WaveSine color="white" size="50px"/> 
                    <Typography color="white">
                        Sinematic
                    </Typography>
                </Stack>
            </Link>
            <Stack flexDirection="row" alignItems="center">
                <NavbarButton 
                    path="/graphify" 
                    label="Graphify" 
                    icon={<ChartLine size="22px" color="white" weight={pathname === "/graphify" ? "bold" : "regular"}/>} 
                    currentPath={pathname}
                />
                <NavbarButton 
                    path="/probavis" 
                    label="Probavis" 
                    icon={<DiceSix size="22px" color="white" weight={pathname === "/probavis" ? "bold" : "regular"}/>} 
                    currentPath={pathname}
                />
                <NavbarButton 
                    path="/about" 
                    label="About" 
                    icon={<Info size="22px" color="white" weight={pathname === "/about" ? "bold" : "regular"}/>} 
                    currentPath={pathname}
                />
            </Stack>
        </Stack>
    </Container>
  )
}

function NavbarButton({path, label, icon, currentPath}) {
    return <Link to={path} style={{textDecoration: "none"}}>
    <Button variant="text" sx={{
        display: "flex",
        minWidth: 132,
        alignItems: "center",
        gap: 1,
        color: "white",
        marginLeft: 3,
        textTransform: "capitalize"
    }}>
        {icon}
        <Typography fontSize={20} sx={{
            fontWeight: currentPath === path ? 600 : 400,
        }}>
            {label}
        </Typography>
    </Button>
</Link>
}