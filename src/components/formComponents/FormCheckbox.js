import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function FormCheckbox({control, name, label}) {
    return <>
        <Controller
            control={control}
            name={name}
            render={({
            field: { ref, ...field },
            fieldState: { error },
            formState,
            }) => <FormControlLabel
                label={label}
                control={<Checkbox
                    ref={ref}
                    checked={field.value}
                    onChange={field.onChange}
                    sx={{
                        '&.Mui-checked': {
                            color: (theme) => theme.palette.success.light
                          },
                      }}
                />}
            />
            }
        />
  </>
}