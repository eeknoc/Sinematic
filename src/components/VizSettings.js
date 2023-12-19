import { Box, Stack, Typography } from "@mui/material"
import React from 'react'
import FormTextfield from "./formComponents/FormTextfield"
import FormSelect from "./formComponents/FormSelect"

export default function VizSettings({control}) {
    return <Stack spacing={2}>
        <Typography variant="secondary" color="#6C757D" sx={{marginBottom: "10px !important"}}>
            Probabilities measure uncertainty and the likelihood of events. They range from 0 (impossible) to 1 (certain). 
            Probabilities can be determined through logic or data analysis. They inform decision-making and help predict outcomes in various fields.
        </Typography>
        <FormTextfield control={control} name="classes" label="Number of Classes" required/>
        <FormTextfield control={control} name="sample" label="Number of Trials" required/>
        <FormSelect 
            control={control} 
            name="color" 
            label="Color" 
            required 
            options={
                [
                    {value: "#BA2020", label: "Red"},
                    {value: "#0A7808", label: "Green"},
                    {value: "#0207AD", label: "Blue"},
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