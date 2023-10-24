import React, { useState } from 'react'
import { Alert, Button, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, Switch, TextField, Typography } from '@mui/material'
import { compile } from 'mathjs'
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form'
import { boolean, number, object, ref, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import VizSettings from './VizSettings'

const validationSchema = object({
  classes: number().min(2).max(20).label("Number of classes").required(),
  sample: number().min(1).max(10000).label("Number of trials").required(),
  color: string().label("Color").required()
})

export default function FeatureBContent() {
  const [vizConfig, setVizConfig] = useState({
    classes: 6,
    sample: 10,
    color: "#222229"
  })

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      classes: 6,
      sample: 10,
      color: "#222229"
    }
  })

  const onSubmit = (data)=> {
    console.log({
      ...vizConfig,
      ...data
    })
    setVizConfig({
      ...vizConfig,
      ...data
    })
  }

  return (
    <Container maxWidth="xl" sx={{
      marginTop: 7,
    }}>
      <Stack sx={{
        border: (theme)=>`1px solid ${theme.palette.divider}`,
        borderRadius: 5,
        padding: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      {/* <Stack flexDirection="row">
      <Stack spacing={2} sx={{
        width: 300
      }}>
          <VizSettings control={control}/>
          <Button variant="contained" onClick={handleSubmit(onSubmit)} sx={{
            backgroundColor: (theme) => theme.palette.success.light,
            ":hover": {
              backgroundColor: (theme) => theme.palette.success.main, 
            }
          }}>
            Run
          </Button>
        </Stack>
        </Stack> */}
        <Typography fontSize={"24px"} sx={{fontStyle: "italic"}}>
          Coming soon...
        </Typography> 
      </Stack>
    </Container>
  )
}