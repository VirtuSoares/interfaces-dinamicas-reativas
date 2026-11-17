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

---

### 📌 [Entregável 02 – Design System com Tailwind CSS](./Entregavel-02-Design-System-Tailwind) (Semana 09)
- **Parte 1 – Configuração:** Projeto Vite configurado com Tailwind CSS (`tailwind.config.js` apontando `content` para `./src/**/*.{js,ts,jsx,tsx}`) e diretivas `@tailwind` importadas em `src/index.css`.
- **Parte 2 – Biblioteca UI:**
  - `Button`: Variações visuais `primary`, `secondary` e `danger` via props.
  - `Badge`: Etiquetas de status com cores dinâmicas (`blue`, `green`, `yellow`, `red`).
  - `Input`: Campo de formulário estilizado com suporte a `label` e validação (`error`).
  - `Card`: Componente refatorado da Semana 08 utilizando classes utilitárias do Tailwind CSS e composição de rodapé.
- **Parte 3 – Desafio (`Alert`):** Componente de alerta dinâmico suportando as variantes `success`, `warning` e `error`.

#### 📸 Preview da Aplicação
<img width="363" height="508" alt="image" src="https://github.com/user-attachments/assets/66028aaa-fb26-4539-a65b-6e85f8a6817d" />


#### 🧠 Parte 4 – Reflexão: Vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentização do React
- **Vantagens:**
  1. **Agilidade no desenvolvimento:** Estilizar diretamente no JSX evita alternar entre múltiplos arquivos `.jsx` e `.css` e elimina o tempo gasto criando nomes de classes (como metodologias BEM).
  2. **Isolamento e escopo por componente:** As classes utilitárias aplicadas no componente evitam conflitos de especificidade e vazamento de estilos globais entre diferentes partes da aplicação.
  3. **Consistência visual (Design Tokens):** Cores, espaçamentos e tipografias seguem escalas padronizadas nativas, facilitando a construção de um Design System coeso.
  4. **Bundle enxuto em produção:** Durante o build, o Tailwind remove automaticamente todas as classes não utilizadas, gerando um arquivo CSS final otimizado.
- **Desvantagens:**
  1. **Poluição visual no JSX:** Componentes com muitos estados interativos (`hover`, `focus`) e breakpoints responsivos podem acumular strings extensas no atributo `className`, reduzindo a legibilidade inicial do markup.
  2. **Curva de aprendizado inicial:** Exige familiaridade com a nomenclatura específica das classes utilitárias do framework em vez de utilizar apenas propriedades CSS puras.
  3. **Necessidade de abstração rigorosa:** Sem uma boa quebra em componentes reutilizáveis no React, repetir conjuntos grandes de classes utilitárias dificulta manutenções globais.


  ---

### 📌 [Entregável 03 – Aplicação Interativa com Estado e Validação](./Entregavel-03-Estado-Carrinho-Checkout) (Semana 10)
- **Parte 1 – Exercício Guiado (`Contador`):** Gerenciamento de estado numérico com `useState` demonstrando o ciclo de re-renderização ao incrementar, decrementar e zerar.
- **Parte 2 – Mini Projeto (Carrinho de Compras):** Catálogo de produtos com adição imutável via *spread operator* (`[...carrinho, novoItem]`), remoção por identificador único, cálculo dinâmico do total com `.reduce()` e feedback visual temporário no botão ao adicionar.
- **Parte 3 – Desafio (`CheckoutForm`):** Formulário de checkout com validação no envio (`onSubmit`), exibindo borda vermelha (`border-red-500`) e mensagem de erro caso o nome esteja vazio.

#### 📸 Preview da Aplicação
<img width="561" height="512" alt="image" src="https://github.com/user-attachments/assets/0b78b928-7704-4a65-9fc5-7c52ca84ffee" />


#### 🧠 Parte 4 – Reflexão: Por que não mutar o estado diretamente e qual a importância do spread operator no React?
- **Por que não devemos mutar o estado diretamente (ex: `carrinho.push(item)`):**
  - O React detecta mudanças de estado comparando a **referência de memória** do valor anterior com o novo (*shallow comparison*). Quando mutamos um array ou objeto diretamente com `.push()`, o conteúdo interno muda, mas a referência de memória continua exatamente a mesma — fazendo com que o React não reconheça a atualização e não dispare uma nova renderização da tela, além de causar bugs imprevisíveis no ciclo de vida e no histórico de estados.
- **Importância do spread operator (`[...carrinho, item]`):**
  - O *spread operator* cria uma **nova cópia rasa (novo array/objeto)** em um novo endereço de memória, preservando os itens anteriores e adicionando o novo item de forma **imutável**. Ao passar esse novo array para a função atualizadora do `useState`, o React identifica imediatamente a nova referência e re-renderiza apenas os componentes necessários com segurança.


---

### 📌 [Entregável 04 – Lifting State Up e useEffect](./Entregavel-04-Lifting-State-UseEffect) (Semana 11)
- **Parte 1 – Exercício Guiado (`LiftingStateDemo`):** Elevação do estado compartilhado para o componente pai, sincronizando em tempo real dois componentes irmãos (`IrmaoEditor` e `IrmaoExibidor`).
- **Parte 2 – Mini Projeto (Gerenciador de Tarefas):** `App` centraliza o array de tarefas, passando callbacks para o componente filho `Formulario` e os dados para o componente filho `Lista`. Um `useEffect` monitora `pendentes` e atualiza dinamicamente o `document.title` da aba do navegador.
- **Parte 3 – Desafio (Timer com Cleanup):** `useEffect` utilizando `setInterval` para contabilizar o tempo ativo na página, executando `clearInterval` na função de retorno (*cleanup*) ao desmontar o componente.

#### 📸 Preview da Aplicação
<img width="516" height="486" alt="image" src="https://github.com/user-attachments/assets/2da185d7-1ab9-4aa7-a214-8c6879a419a8" />


#### 🧠 Parte 4 – Reflexão: Omissão do array de dependências no useEffect e fluxo de dados no Lifting State Up
- **O que acontece se omitirmos o array de dependências do `useEffect`?**
  - Sem o array de dependências (`useEffect(() => { ... })`), o efeito é executado **após toda e qualquer renderização** do componente. Se dentro desse efeito houver uma atualização de estado (`setState`), isso provocará uma nova renderização, disparando o efeito novamente e criando um **loop infinito** que trava a aplicação e consome processamento desnecessário.
- **Como funciona o fluxo de dados no Lifting State Up?**
  - O React segue o fluxo unidirecional de dados (**"dados para baixo, eventos para cima"**): quando dois componentes irmãos precisam compartilhar ou modificar a mesma informação, movemos o estado para o ancestral comum mais próximo (componente pai). O pai envia o estado atual **para baixo via `props`** e envia funções atualizadoras (callbacks) que os filhos invocam para enviar **eventos para cima**, mantendo uma única fonte de verdade (*Single Source of Truth*).
