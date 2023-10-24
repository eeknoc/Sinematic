import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function FormTextfield({control, name, label, required}) {
    return <>
        <Controller
            control={control}
            name={name}
            render={({
            field: { ref, ...field },
            fieldState: { error },
            formState,
            }) => <TextField
                label={label}
                helperText={error?.message}
                inputProps={{ref}}
                required={required}
                {...field}
                value={field.value}
            /> }
        />
  </>
}
