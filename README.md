# Carteira de Vacinação Infantil
Aplicação mobile/web desenvolvida como solução para o desafio técnico de estágio para
desenvolvedor Frontend da Cyrrus. O objetivo é auxiliar pais e responsáveis a
acompanhar a jornada de vacinação de seus filhos, substituindo parte da dependência
da carteira física de vacinação.

## Funcionalidades
- **Acompanhamento de múltiplas crianças**, cada uma com histórico individual
- **Status vacinal por dose**: em dia, atrasada ou pendente, calculado automaticamente
  a partir da data prevista e da data de aplicação
- **Histórico vacinal completo** por criança, com datas e informações de cada vacina
- **Campanhas de vacinação ativas**, exibidas em tela própria

## Decisões de projeto
- **Componentes standalone do Angular**, sem NgModules, reduzindo boilerplate.
- **Modelagem orientada a objetos**: a regra de negócio que define se uma dose está
  em dia, atrasada ou pendente fica encapsulada no próprio model (`DoseVacina.getStatus()`),
  evitando duplicar essa lógica em múltiplas telas.
- **Vacina (catálogo) separada de DoseVacina (aplicação)**: a vacina em si (nome,
  doenças que previne, doses necessárias) é uma entidade própria, independente do
  registro de uma criança específica ter tomado ou não aquela dose.
- **Dados mockados via services com injeção de dependência**, simulando uma fonte de
  dados real. Essa camada foi isolada propositalmente para permitir trocar por
  Firestore no futuro sem alterar os componentes de tela.
- **Paleta de cores obrigatória aplicada via variáveis do Ionic** (`variables.scss`),
  garantindo consistência em toda a aplicação sem repetir códigos de cor pelo código.

## Tecnologias
- Ionic Framework
- Angular (standalone components)
- TypeScript

## Estrutura do projeto
```
src/app/
models/         → Crianca, Vacina, DoseVacina, Campanha, StatusVacina (POO)
services/        → CriancaService, VacinaService, DoseVacinaService, CampanhaService
home/             → tela de lista de crianças
crianca-detalhe/  → carteira de vacinação individual da criança
campanhas/        → campanhas de vacinação ativas
```

## Como rodar localmente
```bash
git clone https://github.com/alananjos06/carteira-vacinal.git
cd carteira-vacinal
npm install
ionic serve
```

## Possíveis evoluções futuras
- Autenticação de responsáveis (login)
- Integração com Firestore como fonte de dados real
- Cadastro e edição de crianças pelo próprio app
- Notificações de vacinas próximas do vencimento

## Aplicação publicada
[Acesse a aplicação aqui](https://carteira-vacinal-alana.web.app):
(https://carteira-vacinal-alana.web.app)

## Autora
Alana Anjos