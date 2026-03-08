import {
  HandCoins,
  ShieldCheck,
  Landmark,
  RefreshCcw,
  FileText
} from "lucide-react"

export const loans = [
  {
    id: 1,
    tag: "Mais procurado",
    badge: "Negativado sob análise",
    icon: HandCoins,
    title: "Empréstimo para negativado",
    subtitle:
      "Atendimento para quem precisa de crédito mesmo com restrição, sujeito à análise.",
    highlight: "Análise rápida",
    features: [
      "Simulação simples e envio direto no WhatsApp",
      "Avaliação personalizada conforme perfil",
      "Parcelamento entre 24x e 60x",
      "Ideal para reorganizar a vida financeira"
    ],
    note:
      "Aprovação sujeita à análise. Restrição no nome não significa bloqueio automático.",
    buttonText: "Quero simular",
    secondaryText: "Ver condições",
    ctaHref: "#solucoes",
    secondaryHref: "#duvidas"
  },
  {
    id: 2,
    tag: "Limites maiores",
    badge: "Com garantia",
    icon: ShieldCheck,
    title: "Empréstimo com garantia",
    subtitle:
      "Modalidade para quem busca valores maiores e melhores condições.",
    highlight: "Mais segurança",
    features: [
      "Pode ampliar limite conforme análise",
      "Melhores prazos possíveis",
      "Processo orientado pelo atendimento",
      "Indicado para valores maiores"
    ],
    note:
      "Modalidade depende de documentação e avaliação da proposta.",
    buttonText: "Quero entender",
    secondaryText: "Tirar dúvidas",
    ctaHref: "#solucoes",
    secondaryHref: "#duvidas"
  },
  {
    id: 3,
    tag: "Capital rápido",
    badge: "Crédito pessoal",
    icon: Landmark,
    title: "Empréstimo pessoal",
    subtitle:
      "Solução para quem precisa de agilidade e uma proposta clara.",
    highlight: "Processo digital",
    features: [
      "Valores de R$ 5.000 até R$ 150.000",
      "Escolha do melhor dia de vencimento",
      "Simulação rápida",
      "Atendimento pelo WhatsApp"
    ],
    note:
      "Condições variam conforme análise e perfil financeiro.",
    buttonText: "Simular agora",
    secondaryText: "Saiba mais",
    ctaHref: "#solucoes",
    secondaryHref: "#conteudos"
  },
  {
    id: 4,
    tag: "Organização financeira",
    badge: "Parcelas ajustáveis",
    icon: RefreshCcw,
    title: "Reorganização de dívidas",
    subtitle:
      "Troque aperto financeiro por parcelas previsíveis.",
    highlight: "Mais controle",
    features: [
      "Parcelamento entre 24x e 60x",
      "Pode atender negativado sob análise",
      "Melhor organização financeira",
      "Processo simples"
    ],
    note:
      "A proposta depende da análise de crédito e perfil do cliente.",
    buttonText: "Montar proposta",
    secondaryText: "Entender processo",
    ctaHref: "#solucoes",
    secondaryHref: "#conteudos"
  },
  {
    id: 5,
    tag: "Etapa transparente",
    badge: "Taxa administrativa",
    icon: FileText,
    title: "Processo administrativo",
    subtitle:
      "Quando aplicável, a taxa administrativa é proporcional ao valor solicitado.",
    highlight: "Transparência",
    features: [
      "Informação clara antes da contratação",
      "Proporcional ao valor solicitado",
      "Processo explicado pelo atendimento",
      "Sem surpresas durante a análise"
    ],
    note:
      "Consulte o atendimento para entender quando essa etapa se aplica.",
    buttonText: "Quero detalhes",
    secondaryText: "Ver FAQ",
    ctaHref: "#duvidas",
    secondaryHref: "#duvidas"
  }
]