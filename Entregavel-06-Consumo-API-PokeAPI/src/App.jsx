import { useState, useEffect } from 'react';
import { PokemonCard } from './components/PokemonCard';

export function App() {
  const [termoBusca, setTermoBusca] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erroRede, setErroRede] = useState('');
  const [naoEncontrado, setNaoEncontrado] = useState(false);

  async function buscarPokemon(nomeOuId) {
    const query = String(nomeOuId).trim().toLowerCase();
    if (!query) return;

    setLoading(true);
    setErroRede('');
    setNaoEncontrado(false);

    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

      if (!resposta.ok) {
        if (resposta.status === 404) {
          setPokemon(null);
          setNaoEncontrado(true);
          return;
        }
        throw new Error(`Erro HTTP ${resposta.status} ao consultar a API.`);
      }

      const dados = await resposta.json();
      setPokemon(dados);
    } catch (err) {
      setPokemon(null);
      setErroRede(err.message || 'Falha de conexão com a API pública.');
    } finally {
      setLoading(false);
    }
  }

  // Parte 1: Chamada assíncrona inicial dentro do useEffect
  useEffect(() => {
    buscarPokemon('pikachu');
  }, []);

  // Parte 2: Busca acionada pelo evento de submit do formulário
  function handleSubmit(e) {
    e.preventDefault();
    buscarPokemon(termoBusca);
  }

  // Parte 3: Resetar busca ao clicar em "Limpar"
  function handleLimpar() {
    setTermoBusca('');
    setNaoEncontrado(false);
    setErroRede('');
    buscarPokemon('pikachu');
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">

        <header className="border-b border-slate-200 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
            Consumo de API Pública • Semana 13
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
            PokéBuscador Reativo (PokeAPI)
          </h1>
          <p className="text-slate-600 mt-1">
            Requisições assíncronas com async/await, estados de Loading, Error e tratamento de HTTP 404.
          </p>
        </header>

        {/* Formulário de Busca (Parte 2) */}
        <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Digite o nome ou número (ex: charizard, gengar, 25)..."
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading || !termoBusca.trim()}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-sm rounded-xl transition-colors"
              >
                {loading ? 'Buscando...' : 'Buscar'}
              </button>
              <button
                type="button"
                onClick={handleLimpar}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
              >
                Limpar
              </button>
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>Sugestões rápidas:</span>
            {['bulbasaur', 'charizard', 'squirtle', 'gengar', 'mewtwo'].map((sugestao) => (
              <button
                key={sugestao}
                type="button"
                onClick={() => {
                  setTermoBusca(sugestao);
                  buscarPokemon(sugestao);
                }}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 font-medium capitalize transition-colors"
              >
                {sugestao}
              </button>
            ))}
          </div>
        </section>

        {/* Estado 1: Loading */}
        {loading && (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 text-center">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-semibold text-slate-600">
              Consultando dados na PokeAPI...
            </p>
          </div>
        )}

        {/* Estado 2: Erro de Rede / Servidor */}
        {!loading && erroRede && (
          <div className="bg-red-50 p-6 rounded-2xl border border-red-200 text-center space-y-3">
            <h3 className="text-lg font-bold text-red-900">Falha na Requisição</h3>
            <p className="text-sm text-red-700">{erroRede}</p>
            <button
              onClick={handleLimpar}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg"
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {/* Estado 3 (Parte 3 Desafio): Vazio / Não Encontrado (404) */}
        {!loading && naoEncontrado && (
          <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
              HTTP 404 • Não Encontrado
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              Nenhum Pokémon encontrado para "{termoBusca}"
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Verifique se o nome ou número foi digitado corretamente ou clique abaixo para resetar a busca.
            </p>
            <button
              onClick={handleLimpar}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Limpar Busca
            </button>
          </div>
        )}

        {/* Estado 4: Sucesso */}
        {!loading && !erroRede && !naoEncontrado && pokemon && (
          <PokemonCard pokemon={pokemon} />
        )}

      </div>
    </div>
  );
}

export default App;