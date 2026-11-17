# ⚛️ Desenvolvimento de Interfaces Dinâmicas e Reativas

Repositório dedicado aos entregáveis da disciplina de Desenvolvimento de Interfaces Dinâmicas e Reativas utilizando React.

---

### 📌 [Entregável 01 – Fundamentos de React e Componentes](./Entregavel-01-Fundamentos-React) (Semana 08)
- **Estrutura:** Projeto estruturado no padrão Vite + React com componentização em `src/components/`.
- **Componentes criados:**
  - `Header`: Cabeçalho dinâmico via props.
  - `Card`: Cartões reutilizáveis recebendo `categoria`, `titulo` e `descricao`.
  - `Lista`: Renderização dinâmica de arrays utilizando `.map()` e chaves únicas (`key`).
  - `Footer`: Rodapé informativo.
  - `App`: Composição principal utilizando Fragments (`<> </>`).

#### 📸 Preview da Aplicação
<img width="1361" height="624" alt="image" src="https://github.com/user-attachments/assets/d2528962-ed54-4a99-b23c-521b890c8517" />


#### 🧠 Reflexão – Entregável 01: Abordagem Imperativa vs. Declarativa e Virtual DOM
- **Diferença entre abordagem imperativa (JS puro) e declarativa (React):**
  - Na **abordagem imperativa** (JavaScript Vanilla), o foco está no **"como"** fazer: o código precisa instruir passo a passo cada modificação no DOM (buscar elementos, criar tags manualmente, alterar classes e inserir nós).
  - Na **abordagem declarativa** (React), o foco está no **"o quê"** exibir: descrevemos a interface desejada no JSX de acordo com o estado dos dados, e o React atualiza a tela automaticamente quando os dados mudam.
- **Por que o Virtual DOM otimiza a performance?**
  - Manipular o DOM real diretamente custa caro para o navegador (recalcula layout e redesenha a tela). O **Virtual DOM** mantém uma cópia leve da interface em memória; quando algo muda, o React compara a nova versão com a anterior (*Diffing*) e atualiza no DOM real **apenas** os elementos específicos que sofreram alteração (*Reconciliation*).
