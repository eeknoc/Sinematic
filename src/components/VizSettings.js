import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material"
import React from 'react'
import { Controller, useFormContext } from "react-hook-form"
import FormTextfield from "./formComponents/FormTextfield"
import FormCheckbox from "./formComponents/FormCheckbox"
import FormSelect from "./formComponents/FormSelect"

export default function VizSettings({control}) {
    return <Stack spacing={2}>
        <FormTextfield control={control} name="classes" label="Number of Classes" required/>
        <FormTextfield control={control} name="sample" label="Number of Trials" required/>
        <FormSelect 
            control={control} 
            name="color" 
            label="Color" 
            required 
            options={
                [
                    {value: "#ba2020", label: "Red"},
                    {value: "#0a7808", label: "Green"},
                    {value: "#0207ad", label: "Blue"},
                    {value: "#222229", label: "Black"}
                ]
            }/>
    </Stack>
}