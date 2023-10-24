import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function FormSelect({control, name, label, required, options}) {
  return (
    <Controller
        control={control}
        name={name}
        render={({
        field: { ref, ...field },
        fieldState: { error },
        formState,
        }) =>
        <FormControl>
            <InputLabel required={required} id={`${name}-select-label`}>
                {label}
            </InputLabel>
            <Select 
                ref={ref}
                error={!!error}
                value={field.value}
                onChange={field.onChange}
                label={label}
                labelId={`${name}-select-label`}
            >
                {options.map((option)=>
                    <MenuItem value={option.value}>
                        {option.label}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    }
    />
  )
}
