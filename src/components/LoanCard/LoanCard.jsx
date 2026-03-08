import "./LoanCard.css"

export default function LoanCard({ loan }) {
  const Icon = loan.icon

  return (
    <article className="loan-card">
      <div className="loan-card__top">
        <div className="loan-card__badges">
          <span className="loan-card__tag">{loan.tag}</span>
          <span className="loan-card__badge">{loan.badge}</span>
        </div>

        <div className="loan-card__icon">
          <Icon size={34} strokeWidth={2} />
        </div>
      </div>

      <div className="loan-card__body">
        <span className="loan-card__highlight">{loan.highlight}</span>
        <h3>{loan.title}</h3>
        <p className="loan-card__subtitle">{loan.subtitle}</p>

        <ul className="loan-card__list">
          {loan.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <p className="loan-card__note">{loan.note}</p>

        <div className="loan-card__actions">
          <a href={loan.ctaHref} className="loan-card__button">
            {loan.buttonText}
          </a>

          <a href={loan.secondaryHref} className="loan-card__link">
            {loan.secondaryText}
          </a>
        </div>
      </div>
    </article>
  )
}