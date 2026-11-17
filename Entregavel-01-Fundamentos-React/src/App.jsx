import { Header } from './components/Header';
import { Card } from './components/Card';
import { Lista } from './components/Lista';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  const conteudos = [
    'React com Vite',
    'Sintaxe JSX',
    'Componentes Funcionais',
    'Comunicação via Props',
    'Renderização de Listas com .map()'
  ];

  return (
    <>
      <Header 
        titulo="Aplicação React - Componentização" 
        subtitulo="Entregável 01 - Semana 08"
      />
      <main className="container">
        <section className="cards-grid">
          <Card 
            categoria="Arquitetura" 
            titulo="Componentes Reutilizáveis" 
            descricao="Divisão da interface em partes independentes e fáceis de manter." 
          />
          <Card 
            categoria="Propriedades" 
            titulo="Fluxo de Dados (Props)" 
            descricao="Passagem de parâmetros dinâmicos do componente pai para os filhos." 
          />
          <Card 
            categoria="Estrutura" 
            titulo="React Fragments" 
            descricao="Uso de <> </> para agrupar elementos sem criar tags extras no DOM." 
          />
        </section>
        <Lista titulo="Conceitos Aplicados no Projeto:" itens={conteudos} />
      </main>
      <Footer texto="Desenvolvido por Victor Hugo | Universidade CEUMA - 2026" />
    </>
  );
}

export default App;