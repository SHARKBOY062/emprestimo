import { useEffect, useMemo, useState } from 'react'
import './LoanCarousel.css'
import LoanCard from '../LoanCard/LoanCard'
import { loans } from '../../data/loans'

function getCardsPerView(width) {
  if (width < 700) return 1
  if (width < 1100) return 2
  return 3
}

export default function LoanCarousel() {
  const [current, setCurrent] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(() =>
    getCardsPerView(window.innerWidth)
  )

  useEffect(() => {
    const handleResize = () => {
      const next = getCardsPerView(window.innerWidth)
      setCardsPerView(next)
      setCurrent((prev) => Math.min(prev, Math.max(loans.length - next, 0)))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(loans.length - cardsPerView, 0)

  const dots = useMemo(() => {
    return Array.from({ length: maxIndex + 1 }, (_, index) => index)
  }, [maxIndex])

  const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0))
  const handleNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex))

  return (
    <section className="loan-carousel">
      <div className="loan-carousel__intro">
        <div>
          <span className="loan-carousel__label">Linhas disponíveis</span>
          <h3>Crédito com argumento forte e apresentação limpa</h3>
        </div>

        <p>
          Navegue entre modalidades para <strong>negativado sob análise</strong>,
          opções com <strong>garantia</strong> e processos com{' '}
          <strong>taxa administrativa proporcional</strong>, quando aplicável.
        </p>
      </div>

      <div className="carousel-shell">
        <button
          className="carousel-arrow carousel-arrow--left"
          onClick={handlePrev}
          disabled={current === 0}
          aria-label="Voltar"
          type="button"
        >
          ‹
        </button>

        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${current * (100 / cardsPerView)}%)`,
            }}
          >
            {loans.map((loan) => (
              <div
                key={loan.id}
                className="carousel-slide"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <LoanCard loan={loan} />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow carousel-arrow--right"
          onClick={handleNext}
          disabled={current === maxIndex}
          aria-label="Avançar"
          type="button"
        >
          ›
        </button>
      </div>

      <div className="carousel-footer">
        <div className="carousel-dots" aria-label="Paginação do carrossel">
          {dots.map((dot) => (
            <button
              key={dot}
              type="button"
              className={`carousel-dot ${current === dot ? 'is-active' : ''}`}
              onClick={() => setCurrent(dot)}
              aria-label={`Ir para grupo ${dot + 1}`}
            />
          ))}
        </div>

        <p className="carousel-footer__note">
          Crédito sujeito à análise. Condições variam conforme perfil, renda,
          documentação e modalidade.
        </p>
      </div>
    </section>
  )
}
