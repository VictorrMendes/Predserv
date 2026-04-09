# Predserv | Site Institucional

Site institucional desenvolvido para cliente, com foco em apresentacao de servicos, portfolio, prova social e captacao de contatos.

## Visao Geral

Este projeto entrega uma landing page moderna para a Predserv Engenharia & Reformas Civis, com seccoes de:

- Hero e proposta de valor
- Sobre a empresa
- Diferenciais
- Servicos
- Portfolio de obras
- Fluxo de atendimento
- Depoimentos
- CTA e contato

Objetivo principal:

- transmitir credibilidade
- facilitar solicitacao de orcamento
- manter manutencao simples para futuras atualizacoes

## Stack Tecnica

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React (icones)
- Deploy recomendado em Vercel

## Estrutura do Projeto

```text
src/
	app/
		globals.css
		layout.tsx
		page.tsx
	components/
		layout/
			Header.tsx
			Footer.tsx
		sections/
			Hero.tsx
			About.tsx
			Features.tsx
			Services.tsx
			Portfolio.tsx
			Workflow.tsx
			Testimonials.tsx
			Cta.tsx
			Contact.tsx
	data/
		content.ts
```

Ponto importante de manutencao:

- todo o conteudo principal (textos, contatos, cards, servicos, depoimentos) fica centralizado em `src/data/content.ts`.

## Branding e Identidade

Paleta base definida em `src/app/globals.css`:

- `predserv-teal`: cor principal da marca
- `predserv-yellow`: cor de destaque
- `predserv-dark`: texto/contraste

Logo textual no header:

- Casa + `Pred` (verde) + `serv` (amarelo) + Martelo

## Como Rodar Localmente

Pre-requisitos:

- Node.js 20+
- npm 10+

Instalacao:

```bash
npm install
```

Ambiente de desenvolvimento:

```bash
npm run dev
```

Build de producao:

```bash
npm run build
```

Subir build localmente:

```bash
npm run start
```

## Scripts Disponiveis

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de producao
- `npm run start`: executa build gerada
- `npm run lint`: executa validacao de lint

## Fluxo de Atualizacao de Conteudo

Para alteracoes rapidas sem mexer em layout:

1. editar `src/data/content.ts`
2. revisar em `npm run dev`
3. gerar build com `npm run build`
4. publicar

## Deploy

Deploy em Vercel conectado ao branch principal.

Checklist antes de publicar:

1. `npm install`
2. `npm run lint`
3. `npm run build`
4. confirmar dados de contato em `src/data/content.ts`

## Observacoes para Entrega ao Cliente

- Projeto preparado para crescimento por blocos (novas seccoes podem ser adicionadas em `src/components/sections`).
- Estrutura orientada para manutencao por conteudo centralizado.
- Visual e copy voltados para conversao de leads (orcamento e contato).

## Licenca

Uso privado para o cliente Predserv. Ajuste conforme contrato comercial.
