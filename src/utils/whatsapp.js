export function gerarLinkWhatsApp({
  nome,
  valor,
  prazo,
  tipoEmprestimo
}) {
  const numero = "5561999110036";

  const mensagem = `
Olá! Vim pelo site e quero simular um empréstimo.

📋 Dados da simulação:

Nome: ${nome || "Não informado"}
Tipo de empréstimo: ${tipoEmprestimo || "Não informado"}
Valor desejado: R$ ${valor || "Não informado"}
Prazo: ${prazo || "Não informado"} meses

Origem: Site
Página: Simulação

Pode me ajudar com essa simulação?
`;

  return \`https://wa.me/\${numero}?text=\${encodeURIComponent(mensagem)}\`;
}
