import { useMemo, useState } from 'react'
import './Hero.css'

const WHATSAPP_NUMBER = '5511999999999'

const installmentOptions = Array.from({ length: 37 }, (_, index) => index + 24)
const dueDayOptions = Array.from({ length: 31 }, (_, index) => index + 1)

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
})

const trustPoints = [
  'Simulação rápida e atendimento humanizado',
  'De R$ 5.000 até R$ 150.000',
  'Parcelamento flexível entre 24x e 60x',
  'Aprovamos para negativado',
]

export default function Hero() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    amount: 30000,
    installments: 36,
    dueDay: 10,
    negative: 'nao',
    incomeRange: 'de-r$2mil-a-r$5mil',
    notes: '',
  })

  const formattedAmount = useMemo(() => {
    return currencyFormatter.format(form.amount)
  }, [form.amount])

  const whatsappMessage = useMemo(() => {
    const lines = [
      'Olá! Vim pela landing e quero simular um empréstimo.',
      '',
      `*Nome:* ${form.name || 'Não informado'}`,
      `*WhatsApp para retorno:* ${form.phone || 'Não informado'}`,
      `*Valor desejado:* ${currencyFormatter.format(form.amount)}`,
      `*Parcelamento desejado:* ${form.installments}x`,
      `*Melhor dia de vencimento:* Dia ${String(form.dueDay).padStart(2, '0')}`,
      `*Está negativado(a)?* ${form.negative === 'sim' ? 'Sim' : 'Não'}`,
      `*Faixa de renda:* ${getIncomeLabel(form.incomeRange)}`,
      `*Observações:* ${form.notes.trim() || 'Nenhuma observação adicional'}`,
      '',
      '*Origem do lead:* Landing Empréstimo',
    ]

    return lines.join('\n')
  }, [form])

  const handleChange = (event) => {
    const { name, value } = event.target
    const numericFields = ['amount', 'installments', 'dueDay']

    setForm((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.phone.trim()) {
      alert('Preencha nome e WhatsApp para continuar.')
      return
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="hero" id="solucoes">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-kicker">Crédito online com análise rápida</span>

          <h1>
            Simule seu empréstimo em minutos, Aprovamos para negativados.
          </h1>

          <p className="hero-description">
            Escolha o valor, defina as parcelas, informe o melhor dia de
            vencimento e envie sua simulação com 1 clique. Também temos análise
            para quem busca <strong>empréstimo para negativado</strong>, sempre
            sujeito à avaliação.
          </p>

          <div className="hero-tags">
            <span>100% digital</span>
            <span>Atendimento rápido</span>
            <span>Negativado sob análise</span>
          </div>

          <ul className="hero-benefits">
            {trustPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero-proof-grid">
            <div className="hero-proof-card">
              <strong>R$ 5 mil a R$ 150 mil</strong>
              <span>Faixa de valor para simulação inicial</span>
            </div>

            <div className="hero-proof-card">
              <strong>24x a 60x</strong>
              <span>Escolha a condição que encaixa no seu bolso</span>
            </div>

            <div className="hero-proof-card">
              <strong>Via WhatsApp</strong>
              <span>Lead enviado com todas as informações preenchidas</span>
            </div>
          </div>
        </div>

        <div className="hero-form-card">
          <div className="hero-form-card__header">
            <span className="hero-chip">Simulação personalizada</span>
            <h2>Monte sua proposta agora</h2>
            <p>
              Preencha os dados abaixo e envie sua solicitação direto para o
              atendimento.
            </p>
          </div>

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
                  placeholder="(11) 99999-9999"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="hero-range">
              <div className="hero-range__top">
                <div>
                  <span className="hero-range__label">Valor desejado</span>
                  <strong>{formattedAmount}</strong>
                </div>

                <div className="hero-range__badge">Mín. R$ 5.000</div>
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

              <div className="hero-range__limits">
                <span>R$ 5 mil</span>
                <span>R$ 150 mil</span>
              </div>
            </div>

            <div className="hero-form__grid hero-form__grid--2">
              <label className="hero-field">
                <span>Quantidade de parcelas</span>
                <select
                  name="installments"
                  value={form.installments}
                  onChange={handleChange}
                >
                  {installmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}x
                    </option>
                  ))}
                </select>
              </label>

              <label className="hero-field">
                <span>Melhor dia de vencimento</span>
                <select
                  name="dueDay"
                  value={form.dueDay}
                  onChange={handleChange}
                >
                  {dueDayOptions.map((day) => (
                    <option key={day} value={day}>
                      Dia {String(day).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="hero-form__grid hero-form__grid--2">
              <label className="hero-field">
                <span>Faixa de renda</span>
                <select
                  name="incomeRange"
                  value={form.incomeRange}
                  onChange={handleChange}
                >
                  <option value="ate-r$2mil">Até R$ 2.000</option>
                  <option value="de-r$2mil-a-r$5mil">De R$ 2.000 a R$ 5.000</option>
                  <option value="de-r$5mil-a-r$10mil">De R$ 5.000 a R$ 10.000</option>
                  <option value="acima-r$10mil">Acima de R$ 10.000</option>
                </select>
              </label>

              <div className="hero-field">
                <span>Você está negativado(a)?</span>

                <div className="hero-radio-group">
                  <label className={`hero-radio ${form.negative === 'nao' ? 'is-active' : ''}`}>
                    <input
                      type="radio"
                      name="negative"
                      value="nao"
                      checked={form.negative === 'nao'}
                      onChange={handleChange}
                    />
                    <span>Não</span>
                  </label>

                  <label className={`hero-radio ${form.negative === 'sim' ? 'is-active' : ''}`}>
                    <input
                      type="radio"
                      name="negative"
                      value="sim"
                      checked={form.negative === 'sim'}
                      onChange={handleChange}
                    />
                    <span>Sim, preciso de análise</span>
                  </label>
                </div>
              </div>
            </div>

            <label className="hero-field">
              <span>Observações</span>
              <textarea
                name="notes"
                rows="4"
                placeholder="Ex.: sou autônomo, quero reduzir parcela, prefiro contato pela manhã..."
                value={form.notes}
                onChange={handleChange}
              />
            </label>

            <div className="hero-summary">
              <div className="hero-summary__item">
                <span>Valor</span>
                <strong>{formattedAmount}</strong>
              </div>

              <div className="hero-summary__item">
                <span>Parcelamento</span>
                <strong>{form.installments}x</strong>
              </div>

              <div className="hero-summary__item">
                <span>Vencimento</span>
                <strong>Dia {String(form.dueDay).padStart(2, '0')}</strong>
              </div>

              <div className="hero-summary__item">
                <span>Perfil</span>
                <strong>{form.negative === 'sim' ? 'Negativado sob análise' : 'Sem negativação'}</strong>
              </div>
            </div>

            <button type="submit" className="hero-submit">
              Enviar simulação no WhatsApp
            </button>

            <p className="hero-disclaimer">
              Ao clicar, uma mensagem automática será aberta no WhatsApp com os
              dados da sua simulação. Crédito sujeito à análise.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function getIncomeLabel(value) {
  const incomeMap = {
    'ate-r$2mil': 'Até R$ 2.000',
    'de-r$2mil-a-r$5mil': 'De R$ 2.000 a R$ 5.000',
    'de-r$5mil-a-r$10mil': 'De R$ 5.000 a R$ 10.000',
    'acima-r$10mil': 'Acima de R$ 10.000',
  }

  return incomeMap[value] || value
}
