import { every, flatten } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'

const BOX_WIDTH = 30
const BOX_HEIGHT = 3
const CANVAS_WIDTH = 1000
const CANVAS_HEIGHT = 850
const COLS_X = [75, 225, 375, 525, 675, 825]
const COL_Y_BASE = 780

export default function FeatureViz({classes, sample, color, hasStarted, setHasStarted}) {
    const canvasRef = useRef(null)
    const chartRects = useRef(Array.from({length: classes}, () => []))
    const [count, setCount] = useState(0)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let animationFrameId

        const render = () => {
            context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

            chartRects.current.forEach((col, i) => {
                context.fillStyle = color
                context.font = "bold 18px Arial"
                context.textAlign = "center"
                context.fillText(`${i + 1}`, COLS_X[i] + BOX_WIDTH / 2, COL_Y_BASE + 25)
                col.forEach((rect) => {
                    rect.draw(context)
                })
            })

            const newNumber = Math.floor(Math.random() * classes)
            const newNumberCol = chartRects.current[newNumber]

            let newNumberMaxHeight = 780

            if (newNumberCol.length > 0) {
                newNumberMaxHeight = newNumberCol.at(-1).maxHeight - BOX_HEIGHT
            }
            
            if (flatten(chartRects.current).length < sample) {
                const newRect = new ChartRect(COLS_X[newNumber], 50, newNumberMaxHeight, color)
                chartRects.current[newNumber].push(newRect)
            } else {
                chartRects.current.forEach((col, i) => {
                    if (col.at(-1) && col.at(-1).atMaxHeight) {
                        context.fillStyle = color
                    context.font = "bold 18px Arial"
                    context.textAlign = "center"
                    context.fillText(`${Math.round(col.length / sample * 100 * 100) / 100}%`, COLS_X[i] + BOX_WIDTH / 2, COL_Y_BASE - col.length * BOX_HEIGHT - 10)
                    }
                })
            }

            animationFrameId = window.requestAnimationFrame(render)
        }

        render()
        if (count === sample && every(chartRects.current.map((col)=>col.at(-1).atMaxHeight), (e) => e)) {
            window.cancelAnimationFrame(animationFrameId)
        }
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [classes, sample, count, color])

    useEffect(() => {

        setCount(0)
        setHasStarted(true)
        chartRects.current = Array.from({length: classes}, () => [])
    }, [classes, sample, color, hasStarted, setHasStarted])
    
    return (
    <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT}/>
  )
}

class ChartRect {
    constructor (x, y, maxHeight, color, width, height, velocityX, velocityY) {
        this.x = x
        this.y = y
        this.maxHeight = maxHeight
        this.color = color || "black"
        this.width = width || BOX_WIDTH
        this.height = height || BOX_HEIGHT
        this.velocityX = velocityX || 50
        this.velocityY = velocityY || 30
        this.atMaxHeight = false
    }
    
    draw(context) {
  
        let {x, y, width, height, velocityX, velocityY} = this
        if (velocityX === 0 && velocityY === 0) {
            return
        }
    
        context.fillStyle = this.color
        context.beginPath()
    
        if (this.y < this.maxHeight) {
            let newY = this.y + 1 * velocityY
            if (newY >= this.maxHeight) {
                this.atMaxHeight = true
                newY = this.maxHeight
            }
            this.y = newY
        }
        
        
        context.fillRect(x, y, width, height)
    
        context.closePath()
        context.fill()
    }
}