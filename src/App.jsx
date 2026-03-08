import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import LoanCarousel from './components/LoanCarousel/LoanCarousel'

const contentCards = [
  {
    title: 'Atendimento para negativado',
    text:
      'Trabalhamos com análise para clientes negativados, sempre sujeito à avaliação de perfil, renda e modalidade disponível.',
  },
  {
    title: 'Empréstimo com garantia',
    text:
      'As modalidades com garantia podem ampliar limite, melhorar condição e aumentar as chances de aprovação.',
  },
  {
    title: 'Taxa administrativa proporcional',
    text:
      'Quando aplicável, a taxa administrativa é proporcional ao valor solicitado e informada com transparência antes do avanço.',
  },
]

const faqItems = [
  {
    question: 'Vocês fazem empréstimo para negativado?',
    answer:
      'Sim, atendemos solicitações de clientes negativados. A aprovação não é automática e depende de análise de perfil, renda, documentação e modalidade.',
  },
  {
    question: 'Como funciona o empréstimo com garantia?',
    answer:
      'No empréstimo com garantia, o cliente apresenta um bem ou lastro aceito na análise. Isso pode melhorar condição, prazo e valor disponível, sempre conforme avaliação.',
  },
  {
    question: 'Existe pagamento de taxa administrativa?',
    answer:
      'Quando houver etapa administrativa, ela é proporcional ao valor do empréstimo solicitado e deve ser informada previamente ao cliente, com clareza sobre condições e processo.',
  },
  {
    question: 'Posso simular antes de falar com o atendimento?',
    answer:
      'Sim. Você escolhe valor, parcelas, melhor dia de vencimento e informa se está negativado. Depois a simulação segue pronta para o WhatsApp.',
  },
]

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Hero />

      <main className="main-content">
        <section className="products-section" id="produtos">
          <div className="container">
            <div className="section-head">
              <span className="section-badge">Modalidades em destaque</span>
              <h2>Escolha a linha de crédito que faz sentido pro seu momento</h2>
              <p>
                Temos opções para quem precisa de capital rápido, busca{' '}
                <strong>empréstimo para negativado</strong> com análise e também
                modalidades de <strong>empréstimo com garantia</strong> para
                tentar melhores condições.
              </p>
            </div>

            <LoanCarousel />
          </div>
        </section>

        <section className="content-section" id="conteudos">
          <div className="container">
            <div className="section-head section-head--left">
              <span className="section-badge">Como trabalhamos</span>
              <h2>Mais clareza no processo, menos enrolação no atendimento</h2>
              <p>
                A proposta aqui é simples: você simula, envia no WhatsApp e o
                atendimento recebe suas informações prontas para agilizar a
                análise.
              </p>
            </div>

            <div className="content-grid">
              {contentCards.map((item) => (
                <article className="content-card" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="process-strip">
              <div className="process-item">
                <span>01</span>
                <strong>Escolha o valor</strong>
                <p>Simule de R$ 5.000 até R$ 150.000 conforme sua necessidade.</p>
              </div>

              <div className="process-item">
                <span>02</span>
                <strong>Defina parcelas e vencimento</strong>
                <p>Monte uma proposta mais alinhada ao seu fôlego financeiro.</p>
              </div>

              <div className="process-item">
                <span>03</span>
                <strong>Envie no WhatsApp</strong>
                <p>O lead chega completo para acelerar o atendimento comercial.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" id="duvidas">
          <div className="container">
            <div className="section-head">
              <span className="section-badge">Dúvidas frequentes</span>
              <h2>Perguntas que o lead sempre faz antes de clicar</h2>
              <p>
                Sem teatrinho. Aqui está o que mais pesa na cabeça de quem busca
                crédito, inclusive quando se trata de{' '}
                <strong>negativado</strong>, garantia e taxa administrativa.
              </p>
            </div>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="final-cta__box">
              <div className="final-cta__content">
                <span className="section-badge">Pronto para avançar?</span>
                <h2>Simule agora seu empréstimo e envie tudo direto no WhatsApp</h2>
                <p>
                  Atendimento com foco em crédito pessoal,{' '}
                  <strong>negativado sob análise</strong> e modalidades de{' '}
                  <strong>empréstimo com garantia</strong>. Quando houver etapa
                  administrativa, a condição deve ser apresentada de forma
                  proporcional ao valor solicitado.
                </p>
              </div>

              <a href="#solucoes" className="final-cta__button">
                Quero fazer minha simulação
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
