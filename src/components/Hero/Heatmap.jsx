import { useEffect,useRef } from "react"

export default function Heatmap(){

const canvasRef=useRef()

useEffect(()=>{

const canvas=canvasRef.current
const ctx=canvas.getContext("2d")

function draw(){

const x=Math.random()*canvas.width
const y=Math.random()*canvas.height

const g=ctx.createRadialGradient(x,y,0,x,y,40)

g.addColorStop(0,"rgba(255,0,0,.4)")
g.addColorStop(1,"transparent")

ctx.fillStyle=g
ctx.fillRect(x-40,y-40,80,80)

}

const interval=setInterval(draw,800)

return()=>clearInterval(interval)

},[])

return(
<canvas
ref={canvasRef}
width="400"
height="200"
className="heatmap"
/>
)

}
