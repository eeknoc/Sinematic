import { Button, Stack, Typography } from '@mui/material'
import { compile, range } from 'mathjs'
import React, { useEffect } from 'react'
import { Axis, LineSeries, Plot } from 'react-plot'
import html2canvas from 'html2canvas';

export default function FeaturePlot({titleText, fnText, minRange, maxRange, minRangeY, maxRangeY, graphColor, displayTicks, axisColor, titleColor, xLabel, yLabel}) {
  const fn = compile(fnText)

  const download = ()=>{
    html2canvas(document.querySelector("#downloadable-area"), {
      canvas: document.querySelector("#base-canvas")
    }).then(canvas => {
      const link = document.createElement("a")
      link.download = "sinematic-graph.png"
      link.href = canvas.toDataURL()
      link.click()
  });
  }

  const data = range(minRange, maxRange, 0.1).toArray().map((x)=>({
    x,
    y: fn.evaluate({x : x})
  }))

  return (
    <Stack
      alignItems={"center"}
    >
      <Stack id="downloadable-area">
      <Typography 
        sx={{
          color: titleColor,
          fontWeight: 600,
          textAlign: "center"
        }}
        variant="h4"
      >
        {titleText}
      </Typography>
      <Plot
          width={1000}
          height={800}
          margin={{ bottom: 50, left: 90, top: 50, right: 100 }}
      >
      <LineSeries
        data={data}
        xAxis="x"
        yAxis="y"
        lineStyle={{ strokeWidth: 3, stroke: graphColor }}
        label="Vg = 7V"
        displayMarker={false}
      />
      <Axis
        id="x"
        position="bottom"
        label={xLabel}
        labelStyle={{fill: axisColor}}
        hiddenTicks={displayTicks ? undefined : true}
        lineStyle={{ strokeWidth: 3, stroke: axisColor }}
      />
      <Axis
        id="y"
        position="left"
        label={yLabel}
        min={minRangeY}
        max={maxRangeY}
        labelStyle={{fill: axisColor}}
        hiddenTicks={displayTicks ? undefined : true}
        lineStyle={{ strokeWidth: 3, stroke: axisColor }}
      />
    </Plot>
    </Stack>
    <Button variant="contained" onClick={download} sx={{
      width: 200,
      backgroundColor: (theme) => theme.palette.success.light,
      ":hover": {
        backgroundColor: (theme) => theme.palette.success.main, 
      }
    }}>
      Download
    </Button>
  </Stack>
  )
}