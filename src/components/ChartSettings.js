import { Box, Stack, Typography } from "@mui/material"
import React from 'react'
import FormTextfield from "./formComponents/FormTextfield"
import FormCheckbox from "./formComponents/FormCheckbox"
import FormSelect from "./formComponents/FormSelect"

export default function ChartSettings({control}) {
    return <Stack spacing={2} sx={{
        minWidth: "300px"
    }}>
        <Typography variant="secondary" color="#6C757D" sx={{marginBottom: "10px !important"}}>
            Visualize a function with customizable features, including color and the axes.
        </Typography>
        <FormTextfield control={control} name="titleText" label="Title" required/>
        <FormTextfield control={control} name="fnText" label="Function" required/>
        <FormTextfield control={control} name="minRange" label="Min for X-axis"/>
        <FormTextfield control={control} name="maxRange" label="Max for X-axis"/>
        <FormTextfield control={control} name="minRangeY" label="Min for Y-axis"/>
        <FormTextfield control={control} name="maxRangeY" label="Max for Y-axis"/>
        <FormTextfield control={control} name="xLabel" label="Label for X-axis"/>
        <FormTextfield control={control} name="yLabel" label="Label for Y-axis"/>
        <FormCheckbox control={control} name="displayTicks" label="Show Ticks?"/>
        <FormSelect 
            control={control} 
            name="graphColor" 
            label="Graph color" 
            required 
            options={
                [
                    {value: "#ba2020", label: "Red"},
                    {value: "#0a7808", label: "Green"},
                    {value: "#0207ad", label: "Blue"},
                    {value: "#222229", label: "Black"}
                ].map(({value, label}) => ({value , label: <Box sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                }}>
                    <Box sx={{
                        width: 12,
                        height: 12,
                        bgcolor: value
                    }}/>
                    {label}
                </Box>}))
            }/>
            <FormSelect 
            control={control} 
            name="axisColor" 
            label="Axis color" 
            required 
            options={
                [
                    {value: "#ba2020", label: "Red"},
                    {value: "#0a7808", label: "Green"},
                    {value: "#0207ad", label: "Blue"},
                    {value: "#222229", label: "Black"}
                ].map(({value, label}) => ({value , label: <Box sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                }}>
                    <Box sx={{
                        width: 12,
                        height: 12,
                        bgcolor: value
                    }}/>
                    {label}
                </Box>}))
            }/>
            <FormSelect 
            control={control} 
            name="titleColor" 
            label="Title color" 
            required 
            options={
                [
                    {value: "#ba2020", label: "Red"},
                    {value: "#0a7808", label: "Green"},
                    {value: "#0207ad", label: "Blue"},
                    {value: "#222229", label: "Black"}
                ].map(({value, label}) => ({value , label: <Box sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                }}>
                    <Box sx={{
                        width: 12,
                        height: 12,
                        bgcolor: value
                    }}/>
                    {label}
                </Box>}))
            }/>
    </Stack>
}