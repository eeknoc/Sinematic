import React, { useState } from 'react'
import { Button, Container, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { number, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import VizSettings from './VizSettings'
import FeatureViz from './FeatureViz'

const validationSchema = object({
  classes: number().min(2).max(20).label("Number of classes").required(),
  sample: number().min(1).max(1000, "Must be less than or equal to 1000").label("Number of trials").required(),
  color: string().label("Color").required()
})

export default function FeatureBContent() {
  const [vizConfig, setVizConfig] = useState({
    classes: 6,
    sample: 200,
    color: "#222229"
  })

  const [hasStarted, setHasStarted] = useState(false)

  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      classes: 6,
      sample: 200,
      color: "#222229"
    }
  })

  const onSubmit = (data)=> {
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
        padding: 5
      }}>

    <Stack flexDirection="row">
      <Stack spacing={2} sx={{
        width: 300
      }}>
        <VizSettings control={control}/>
        <Button disabled={Object.keys(formState.errors).length} variant="contained" onClick={()=>{
          setHasStarted(false)
          handleSubmit(onSubmit)()}} sx={{
            backgroundColor: (theme) => theme.palette.success.light,
            ":hover": {
              backgroundColor: (theme) => theme.palette.success.main, 
            }
          }}>
            Start
        </Button>
      </Stack>
        <Stack sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1
        }}>
          <FeatureViz {...vizConfig} hasStarted={hasStarted} setHasStarted={setHasStarted}/>
        </Stack>
      </Stack>
    </Stack>
    </Container>
  )
}