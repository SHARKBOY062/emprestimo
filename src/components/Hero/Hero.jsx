import { useState, useMemo } from "react"
import "./Hero.css"

const WHATSAPP="5561999110036"

const format=new Intl.NumberFormat("pt-BR",{
style:"currency",
currency:"BRL",
maximumFractionDigits:0
})

export default function Hero(){

const [form,setForm]=useState({

nome:"",
cpf:"",
cidade:"",
estado:"SP",

ocupacao:"",
tipoRenda:"CLT",
renda:"2000-4000",
tempoTrabalho:"1-2 anos",

negativado:"Sim",
garantia:"Nenhuma",

valor:20000,
parcelas:36,
diaPagamento:10

})

const taxa=0.05

const parcela=useMemo(()=>{

const p=form.valor
const i=taxa
const n=form.parcelas

return Math.round((p*i)/(1-Math.pow(1+i,-n)))

},[form.valor,form.parcelas])

function change(e){

const {name,value}=e.target

setForm(prev=>({
...prev,
[name]:
["valor","parcelas","diaPagamento"].includes(name)
?Number(value)
:value
}))

}

function maskCPF(v){

v=v.replace(/\D/g,"")

if(v.length>11)v=v.slice(0,11)

v=v.replace(/(\d{3})(\d)/,"$1.$2")
v=v.replace(/(\d{3})(\d)/,"$1.$2")
v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

return v

}

function enviar(e){

e.preventDefault()

const msg=`

SOLICITAÇÃO DE EMPRÉSTIMO

Nome: ${form.nome}
CPF: ${form.cpf}

LOCALIZAÇÃO
Cidade: ${form.cidade}
Estado: ${form.estado}

PROFISSIONAL
Ocupação: ${form.ocupacao}
Tipo renda: ${form.tipoRenda}
Faixa renda: ${form.renda}
Tempo trabalho: ${form.tempoTrabalho}

CRÉDITO
Valor solicitado: ${format.format(form.valor)}
Parcelas: ${form.parcelas}
Parcela estimada: ${format.format(parcela)}

SITUAÇÃO
Negativado: ${form.negativado}
Garantia: ${form.garantia}

Pagamento
Melhor dia: ${form.diaPagamento}

Origem: Landing
`

const url=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

window.open(url,"_blank")

}

return(

<section className="hero">

<div className="hero-container">

<div className="hero-left">

<span className="badge">
Crédito aprovado em minutos
</span>

<h1>
Empréstimo até <span>R$150.000</span>
<br/>
mesmo para negativado
</h1>

<p>
Solicite seu crédito online com análise rápida e personalizada.
</p>

<ul className="benefits">

<li>✔ Aprovação rápida</li>
<li>✔ Parcelamento até 60x</li>
<li>✔ Negativado pode solicitar</li>
<li>✔ Opção com garantia</li>

</ul>

</div>

<div className="hero-form">

<form onSubmit={enviar}>

<h3>Simule seu crédito</h3>

<input
placeholder="Nome completo"
name="nome"
onChange={change}
/>

<input
placeholder="CPF"
value={form.cpf}
onChange={e=>setForm({...form,cpf:maskCPF(e.target.value)})}
/>

<div className="grid2">

<input
placeholder="Cidade"
name="cidade"
onChange={change}
/>

<select name="estado" onChange={change}>

<option>SP</option>
<option>RJ</option>
<option>MG</option>
<option>GO</option>
<option>DF</option>

</select>

</div>

<input
placeholder="Profissão / Ocupação"
name="ocupacao"
onChange={change}
/>

<div className="grid2">

<select name="tipoRenda" onChange={change}>

<option>CLT</option>
<option>Autônomo</option>
<option>Servidor Público</option>
<option>Empresário</option>
<option>Aposentado</option>

</select>

<select name="renda" onChange={change}>

<option>Até 2000</option>
<option>2000 - 4000</option>
<option>4000 - 7000</option>
<option>7000 - 12000</option>
<option>12000+</option>

</select>

</div>

<select name="tempoTrabalho" onChange={change}>

<option>Menos de 6 meses</option>
<option>6 meses - 1 ano</option>
<option>1 - 2 anos</option>
<option>3 - 5 anos</option>
<option>5+ anos</option>

</select>

<label>Valor desejado</label>

<div className="slider-value">
{format.format(form.valor)}
</div>

<input
type="range"
min="5000"
max="150000"
step="1000"
name="valor"
value={form.valor}
onChange={change}
/>

<label>Parcelas</label>

<div className="slider-value">
{form.parcelas}x
</div>

<input
type="range"
min="12"
max="60"
name="parcelas"
value={form.parcelas}
onChange={change}
/>

<div className="estimativa">

<span>Parcela estimada</span>

<strong>
{format.format(parcela)}
</strong>

</div>

<div className="grid2">

<select name="negativado" onChange={change}>

<option>Negativado</option>
<option>Nome limpo</option>

</select>

<select name="garantia" onChange={change}>

<option>Nenhuma garantia</option>
<option>Veículo</option>
<option>Imóvel</option>

</select>

</div>

<label>Melhor dia para pagamento</label>

<input
type="range"
min="1"
max="30"
name="diaPagamento"
value={form.diaPagamento}
onChange={change}
/>

<div className="slider-value">
Dia {form.diaPagamento}
</div>

<button className="cta">
Simular no WhatsApp
</button>

</form>

</div>

</div>

</section>

)

}