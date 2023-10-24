import React, { useState } from 'react'
import FeaturePlot from './FeaturePlot'
import { Alert, Button, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, Switch, TextField } from '@mui/material'
import { compile } from 'mathjs'
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form'
import { boolean, number, object, ref, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import ChartSettings from './ChartSettings'

const validationSchema = object({
  titleText: string().label("Title").required(),
  fnText: string().label("Function").required(),
  minRange: number().max(ref("maxRange")).label("Min for X-axis").notRequired(),
  maxRange: number().min(ref("minRange")).label("Max for X-axis").notRequired(),
  minRangeY: number().max(ref("maxRangeY")).label("Min for Y-axis").notRequired(),
  maxRangeY: number().min(ref("minRangeY")).label("Max for Y-axis").notRequired(),
  xLabel: string().label("Label for X-axis"),
  yLabel: string().label("Label for Y-axis"),
  displayTicks: boolean().label("Show ticks?").notRequired(),
  graphColor: string().label("Graph Color").required(),
  axisColor: string().label("Axis Color").required()
})

export default function FeatureAContent() {
  const [chartConfig, setChartConfig] = useState({
    titleText: "Default Title",
    fnText: "y = x",
    minRange: 0,
    maxRange: 10,
    minRangeY: 0,
    maxRangeY: 10,
    xLabel: "",
    yLabel: "",
    graphColor: "#222229",
    axisColor: "#222229",
    titleColor: "#222229",
    displayTicks: true
  })

  console.log(chartConfig)

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      titleText: 'Default Title',
      fnText: 'y = x',
      minRange: 0,
      maxRange: 10,
      minRangeY: 0,
      maxRangeY: 10,
      xLabel: "",
      yLabel: "",
      displayTicks: true,
      axisColor: "#222229",
      titleColor: "#222229",
      graphColor: "#222229"
    }
  })

  const onSubmit = (data)=> {
    console.log({
      ...chartConfig,
      ...data
    })
    setChartConfig({
      ...chartConfig,
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
          <ChartSettings control={control}/>
          <Button variant="contained" onClick={handleSubmit(onSubmit)} sx={{
            backgroundColor: (theme) => theme.palette.success.light,
            ":hover": {
              backgroundColor: (theme) => theme.palette.success.main, 
            }
          }}>
            Calculate
          </Button>
        </Stack>
          <FeaturePlot {...chartConfig}/>
        </Stack>
      </Stack>
    </Container>
  )
}