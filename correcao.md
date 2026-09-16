#Criterio1 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio2 — Mínimo 5 componentes funcionais
Correto
Nota: 1,00

#Criterio3 — useState para gerenciar estado
Correto
Nota: 1,00

#Criterio4 — useEffect para efeitos colaterais
Correto
Nota: 1,00

#Criterio5 — Next Router com navegação entre páginas
Correto
Nota: 1,00

#Criterio6 — Props passadas entre componentes
Correto
Nota: 1,00

#Criterio7 — Formulário funcional para criar anotações
Correto
Nota: 1,00

#Criterio8 — Lista de anotações com ver detalhes e excluir
Correto
Nota: 1,00

#Criterio9 — Comentários no código (useState, useEffect, eventos)
Incorreto
Nota: 0,00

#Criterio10 — Data/hora automática em cada anotação
Correto
Nota: 1,00

Subtotal: 9,00

Penalizações:
- Nenhuma

Total final: 9,00

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**Critério 1 — Mínimo 8 commits na main:** 8 commits em `main`, com mensagens por etapa (componentes, página principal, exclusão/busca, detalhes, commit geral). Correto.

**Critério 2 — Mínimo 5 componentes funcionais:** Em `components/`: `Cabecalho`, `FormularioAnotacao`, `ListaAnotacoes`, `CartaoAnotacao`, `BarraBusca`, `DetalhesAnotacao` (≥5). Correto.

**Critério 3 — useState para gerenciar estado:** `app/page.js` (`"use client"`) gerencia `anotacoes` e `termoBusca`; `FormularioAnotacao.js` gerencia `titulo`/`conteudo`. Correto.

**Critério 4 — useEffect para efeitos colaterais:** Em `app/notes/[id]/page.js`, `useEffect` atualiza `document.title` com o título da anotação e faz cleanup. Correto.

**Critério 5 — Next Router com navegação entre páginas:** Rota `app/notes/[id]/page.js`. `page.js` usa `useRouter().push` com query params (`titulo`, `conteudo`, `criadoEm`); a página de detalhes usa `useSearchParams` (e `Suspense`). Correto.

**Critério 6 — Props passadas entre componentes:** `FormularioAnotacao` (`aoCriar`), `BarraBusca` (`valor`/`aoAlterar`), `ListaAnotacoes`/`CartaoAnotacao` (`anotacoes`, `aoSelecionar`, `aoExcluir`), `DetalhesAnotacao` (`titulo`/`conteudo`/`criadoEm`). Correto.

**Critério 7 — Formulário funcional para criar anotações:** Formulário controlado com título + conteúdo, validação e `aoCriar` no submit. Correto.

**Critério 8 — Lista de anotações com ver detalhes e excluir:** `CartaoAnotacao` com “Ver detalhes” e “Excluir”. Correto.

**Critério 9 — Comentários no código:** Não há comentários explicativos sobre `useState`, `useEffect` ou handlers (apenas um comentário ilegível no fim de `page.js`). Incorreto.

**Critério 10 — Data/hora automática em cada anotação:** `criadoEm: new Date().toLocaleString("pt-BR")` na criação. Correto.

## CONTEXTO GIT
```
Repositório: https://github.com/Pedro-Britoo/checkpoint-4-webdev-ESR1
Branch: main
Total de commits: 8

git shortlog -sn HEAD:
     8  Pedro-Britoo <boilingpedro64@gmail.com>

Participante: Pedro Henrique Santos de Brito — RM 573187
```
