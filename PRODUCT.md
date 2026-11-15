# Bryan Tan Portfolio

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The portfolio primarily serves three audiences, confirmed by Bryan:

- Potential clients evaluating his capabilities and services.
- Recruiters and hiring teams evaluating his work and career experience.
- Curious viewers exploring his projects, interests, and background.

No priority ranking between these audiences has been established.

## Product Purpose

A personal portfolio for Bryan Tan Hoe Kin, a Malaysia-based full-stack .NET developer, software engineer, and solutions architect. It brings selected projects, career experience, technical skills, services, personal background, and contact information together.

The existing workflows let visitors inspect real work, review professional experience and the résumé, understand the person behind the work, and start a conversation. These workflows support the confirmed audiences; no conversion targets or other success metrics have been set.

## Positioning

Bryan combines C# and .NET development with experience across legal and accounting technology, payments, and life and pension systems. His portfolio also demonstrates exploration beyond .NET through AI, knowledge retrieval, data, and practical software projects.

Services include product development and maintenance, AI workflow automation with MCP integrations, AI and data solutions, and integrated systems. Some AI and data work involves a partner. Project work is undertaken outside regular working hours; do not imply unrestricted availability or a larger delivery team.

## Operating Context

- This is a public, English-language web portfolio with one main page and section navigation.
- Visitors can follow project demonstrations, source repositories, and an existing press link; open the résumé; or use direct contact links.
- Contact channels include email, LinkedIn, WhatsApp, and Instagram. GitHub is also linked.
- The repository documents `https://bthk2151.dev` as the production domain and an existing Vercel deployment setup. These are repository facts, not a fresh check of the deployed service.

## Capabilities and Constraints

- The existing implementation uses Next.js App Router, React, and TypeScript. Content lives primarily in `src/data/portfolio.ts` and `src/app/page.tsx`.
- The main page includes work, experience, expertise, about, services, and contact sections. Services use an expandable accordion.
- Light and dark themes are supported. The current first-visit default is dark, and the saved preference uses the `isDarkMode` storage key.
- Permanent redirects retain `/about`, `/experience`, and `/contact` as links to the corresponding page sections.
- A résumé is available at `public/resume.pdf`; the trading-bot report is available at `public/sentiment-trading-bot.html`.
- Metadata, a generated social preview, sitemap, robots configuration, and Vercel Analytics are already implemented.
- Preserve factual content and existing visitor capabilities during scoped refinement. A new task can explicitly change product requirements.

Bryan confirmed that the current bio, career history, project list, services, contact information, Malaysia-based .NET focus, and work outside regular working hours are accurate during this initialization.

## Brand Commitments

- Public name: Bryan Tan; full name: Bryan Tan Hoe Kin.
- Retain the factual distinction between Bryan's individual work and projects built with a partner or volunteer community.
- Personal background includes motorcycling, weightlifting, instruments, coffee, and chess.
- Keep the hero portrait prominent. Bryan rejected reducing it to a small avatar.
- Preserve the portrait’s original muted treatment: `saturate(0.62)` with a bottom dark gradient.
- Project summaries should stay concise. RAG Bot should communicate the contribution split without a long case-study block.
- Preserve the original tilted project screenshots and small numbered labels, as Bryan prefers that treatment.

## Evidence on Hand

- `src/data/portfolio.ts`: confirmed project descriptions, technologies, links, career entries, skills, services, and contact channels.
- RAG Bot contribution, confirmed by Bryan: frontend development, UI/UX, authorization, upload mechanisms, and performance metrics. His partner focused on backend extraction, chunking, embedding, search, and AI/RAG libraries.
- `src/app/page.tsx`: confirmed introduction, personal background, and service availability.
- `src/assets/projects/`: screenshots for RAG Bot, Personal Finance Project, c19memorialmy, Sentiment Trading Bot, and the portfolio itself.
- `src/assets/me/`: Bryan's portrait and motorcycle photograph.
- `src/assets/companies/`: logos for the listed career entries.
- `public/resume.pdf`: the existing résumé; its contents have not been separately reviewed during initialization.
- `public/sentiment-trading-bot.html`: the existing project report.
- The c19memorialmy entry includes an external press link. External destinations have not been independently verified during initialization.

Do not invent testimonials, customer relationships, performance metrics, business outcomes, or endorsements. New factual claims need supporting evidence or Bryan's confirmation.

## Product Principles

Derived from the confirmed audience and current product facts:

1. Help clients and hiring teams assess capability through real projects and professional experience.
2. Give curious visitors enough personal context to understand who Bryan is and what interests him.
3. Keep attribution, technical claims, and availability accurate.
4. Make project exploration, résumé access, and direct contact straightforward.

## Accessibility & Inclusion

The existing implementation includes responsive layouts, semantic sections, a skip link, visible keyboard focus, labeled controls, keyboard-aware navigation, and reduced-motion support. Preserve those capabilities during refinement. No additional audience-specific accessibility requirements or formal conformance target have been established.
