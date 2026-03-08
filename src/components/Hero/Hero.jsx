import { useMemo, useState } from "react"
import "./Hero.css"

const WHATSAPP_NUMBER = "5561999110036"

const installmentOptions = Array.from({ length: 37 }, (_, i) => i + 24)
const dueDayOptions = Array.from({ length: 31 }, (_, i) => i + 1)

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
})

const trustPoints = [
  "Simulação rápida e atendimento humanizado",
  "De R$ 5.000 até R$ 150.000",
  "Parcelamento flexível entre 24x e 60x",
  "Análise também para negativados"
]

export default function Hero() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: 30000,
    installments: 36,
    dueDay: 10,
    negative: "nao",
    incomeRange: "de-r$2mil-a-r$5mil",
    notes: ""
  })

  const formattedAmount = useMemo(() => {
    return currencyFormatter.format(form.amount)
  }, [form.amount])

  const whatsappMessage = useMemo(() => {

    const lines = [
      "Olá! Vim pelo site e gostaria de simular um empréstimo.",
      "",
      "📋 *Dados da simulação*",
      "",
      `👤 Nome: ${form.name || "Não informado"}`,
      `📱 WhatsApp: ${form.phone || "Não informado"}`,
      `💰 Valor desejado: ${currencyFormatter.format(form.amount)}`,
      `📆 Parcelamento: ${form.installments}x`,
      `📅 Melhor dia de vencimento: Dia ${String(form.dueDay).padStart(2,"0")}`,
      `⚠️ Está negativado?: ${form.negative === "sim" ? "Sim" : "Não"}`,
      `💼 Faixa de renda: ${getIncomeLabel(form.incomeRange)}`,
      `📝 Observações: ${form.notes.trim() || "Nenhuma observação"}`,
      "",
      "📍 Origem: Site de Simulação",
      "",
      "Pode verificar essa simulação para mim?"
    ]

    return lines.join("\n")

  }, [form])

  const handleChange = (e) => {
    const { name, value } = e.target
    const numericFields = ["amount","installments","dueDay"]

    setForm(prev => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.phone.trim()) {
      alert("Preencha nome e WhatsApp para continuar.")
      return
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(url, "_blank")
  }

  return (
    <section className="hero" id="solucoes">

      <div className="container hero-inner">

        <div className="hero-content">

          <span className="hero-kicker">
            Crédito online com análise rápida
          </span>

          <h1>
            Simule seu empréstimo em minutos.  
            Aprovamos também para negativados.
          </h1>

          <p className="hero-description">
            Escolha o valor, defina as parcelas e envie sua simulação direto
            para nosso atendimento pelo WhatsApp.
          </p>

          <ul className="hero-benefits">
            {trustPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </div>

        <div className="hero-form-card">

          <form className="hero-form" onSubmit={handleSubmit}>

            <div className="hero-form__grid hero-form__grid--2">

              <label className="hero-field">
                <span>Seu nome</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label className="hero-field">
                <span>Seu WhatsApp</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(61) 99999-9999"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>

            </div>

            <div className="hero-range">

              <div className="hero-range__top">
                <span>Valor desejado</span>
                <strong>{formattedAmount}</strong>
              </div>

              <input
                type="range"
                name="amount"
                min="5000"
                max="150000"
                step="1000"
                value={form.amount}
                onChange={handleChange}
                className="hero-slider"
              />

            </div>

            <div className="hero-form__grid hero-form__grid--2">

              <label className="hero-field">
                <span>Parcelas</span>
                <select
                  name="installments"
                  value={form.installments}
                  onChange={handleChange}
                >
                  {installmentOptions.map(option => (
                    <option key={option} value={option}>
                      {option}x
                    </option>
                  ))}
                </select>
              </label>

              <label className="hero-field">
                <span>Dia de vencimento</span>
                <select
                  name="dueDay"
                  value={form.dueDay}
                  onChange={handleChange}
                >
                  {dueDayOptions.map(day => (
                    <option key={day} value={day}>
                      Dia {day}
                    </option>
                  ))}
                </select>
              </label>

            </div>

            <label className="hero-field">
              <span>Você está negativado?</span>

              <select
                name="negative"
                value={form.negative}
                onChange={handleChange}
              >
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
              </select>
            </label>

            <button className="hero-submit" type="submit">
              Enviar simulação no WhatsApp
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

function getIncomeLabel(value) {

  const map = {
    "ate-r$2mil": "Até R$ 2.000",
    "de-r$2mil-a-r$5mil": "De R$ 2.000 a R$ 5.000",
    "de-r$5mil-a-r$10mil": "De R$ 5.000 a R$ 10.000",
    "acima-r$10mil": "Acima de R$ 10.000"
  }

  return map[value] || value
}