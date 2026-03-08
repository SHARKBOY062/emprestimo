import { useEffect,useState } from "react"

const nomes=["João","Maria","Carlos","Ana","Pedro","Lucas","Juliana"]

export default function Notifications(){

const [msg,setMsg]=useState(null)

useEffect(()=>{

const interval=setInterval(()=>{

const nome=nomes[Math.floor(Math.random()*nomes.length)]
const valor=Math.floor(Math.random()*50000)+5000

setMsg(nome + " acabou de ser aprovado para " + 
valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))

setTimeout(()=>setMsg(null),4000)

},6000)

return()=>clearInterval(interval)

},[])

if(!msg)return null

return(
<div className="notif">
🔥 {msg}
</div>
)

}
