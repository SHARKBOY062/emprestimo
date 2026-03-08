import { useEffect,useState } from "react"

export default function BrazilMap(){

const [points,setPoints]=useState([])

useEffect(()=>{

const interval=setInterval(()=>{

setPoints(p=>[
...p,
{
id:Math.random(),
x:Math.random()*300,
y:Math.random()*160
}
].slice(-15))

},2000)

return()=>clearInterval(interval)

},[])

return(

<div className="brazil-map">

<img src="/brasil.svg" alt="mapa brasil"/>

{points.map(p=>(
<span
key={p.id}
className="map-point"
style={{left:p.x,top:p.y}}
/>
))}

</div>

)

}
